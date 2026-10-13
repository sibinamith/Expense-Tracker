import { saveTransactions } from "./storage.js";

import { convert_to_date, createTransaction } from "./transactions.js";

import { FindTotal, getCategoryTotals } from "./calculations.ts";

let editingIndex = null;
const inp_desc = document.querySelector("#description-input");
const inp_amount = document.querySelector("#amount-input");
const inp_category = document.querySelector("#category-input");
const inp_expense = document.querySelector("#expense-input");
const inp_date = document.querySelector("#date-input");
const t_list = document.querySelector("#transaction-list");
const t_total = document.querySelector("#transaction-total");
const bar_chart = document.querySelector("#chart");
const search_bar = document.querySelector("#search-box");
const select_bar = document.querySelector("#category-select");
const sort_select = document.querySelector("#sort");

export function renderTransactions(transactions) {
  t_list.textContent = " ";
  const filtered_transactions = filterTransaction(transactions);
  filtered_transactions.forEach((trans) => {
    if (!(trans.date instanceof Date)) {
      convert_to_date(trans);
    }
    const p_el = document.createElement("p");
    p_el.textContent = `${trans.date.toLocaleDateString()}: ${trans.description} ---£${trans.amount} (${trans.category}) `;
    t_list.appendChild(p_el);
    const b_el = document.createElement("button");
    b_el.textContent = "Delete";
    const d_el = document.createElement("button");
    d_el.textContent = "Edit";
    d_el.addEventListener("click", () => {
      inp_amount.value = trans.amount;
      inp_desc.value = trans.description;
      inp_category.value = trans.category;
      inp_expense.checked = trans.expense;
      inp_date.value = trans.date.toISOString().slice(0, 10);
      editingIndex = transactions.indexOf(trans);
    });
    b_el.addEventListener("click", () => {
      transactions.splice(transactions.indexOf(trans), 1);
      renderTransactions(transactions);
    });
    p_el.appendChild(b_el);
    p_el.appendChild(d_el);
  });
  renderChart(transactions);
  renderTotals(transactions);

  saveTransactions(transactions);
}

function renderTotals(transactions) {
  t_total.textContent = " ";
  const total = FindTotal(transactions);

  const totalIncomeEl = document.createElement("p");
  totalIncomeEl.textContent = `Total Income:  --- £${total.totalIncome}`;

  const totalExpensesEl = document.createElement("p");
  totalExpensesEl.textContent = `Total Expenses:  ----£${total.totalExpenses}`;

  const balanceEl = document.createElement("p");
  balanceEl.textContent = `Balance: -----£${total.balance}`;

  t_total.appendChild(totalIncomeEl);
  t_total.appendChild(totalExpensesEl);
  t_total.appendChild(balanceEl);
}

function renderChart(transactions) {
  bar_chart.textContent = "";
  let category_totals = getCategoryTotals(transactions);
  category_totals = Object.entries(category_totals);
  if (category_totals.length === 0) return null;
  category_totals.sort((a, b) => b[1] - a[1]);
  const high_value = category_totals[0][1];
  category_totals.forEach(([category, amount]) => {
    const d_el = document.createElement("div");
    d_el.style.width = `${(amount / high_value) * 100}%`;
    d_el.style.height = "20px";
    d_el.style.backgroundColor = "orange";
    const l_el = document.createElement("label");
    l_el.htmlFor = category;
    l_el.textContent = ` ${category} - ${amount}`;
    bar_chart.appendChild(d_el);
    bar_chart.appendChild(l_el);
  });
  return null;
}

function filterTransaction(transactions) {
  let filtered_transactions = null;
  const search_value = search_bar.value.toLowerCase();
  const select_value =
    select_bar.value.toLowerCase() === "all"
      ? ""
      : select_bar.value.toLowerCase();
  const radio_btn = document.querySelector('input[name="mode"]:checked');
  const selectedExpense = radio_btn?.value === "1";
  const sort_value = sort_select.value;
  if (search_value != "" || select_value !== "") {
    filtered_transactions = transactions.filter((trans) => {
      if (
        trans.description.toLowerCase().includes(search_value) &&
        trans.category.toLowerCase().includes(select_value)
      ) {
        return true;
      }
      return false;
    });
  } else {
    filtered_transactions = transactions;
  }
  if (radio_btn && radio_btn?.value !== "2") {
    filtered_transactions = filtered_transactions.filter(
      (trans) => trans.expense === selectedExpense,
    );
  }
  if (sort_value !== "None") {
    if (sort_value === "a") {
      filtered_transactions.sort((a, b) => a.amount - b.amount);
    } else {
      filtered_transactions.sort((a, b) => b.amount - a.amount);
    }
  }
  return filtered_transactions;
}

export function addTransaction(event, transactions) {
  event.preventDefault();
  const description = inp_desc.value;
  const amount = Number(inp_amount.value);
  const category = inp_category.value;
  const expense = inp_expense.checked;
  const date = inp_date.value;
  if (editingIndex === null) {
    const transaction = createTransaction(
      description,
      amount,
      category,
      expense,
      date ? new Date(date) : new Date(),
    );
    transactions.push(transaction);
  } else {
    const transaction = createTransaction(
      description,
      amount,
      category,
      transactions[editingIndex].expense,
      date ? new Date(date) : new Date(),
    );
    transactions[editingIndex] = transaction;
    editingIndex = null;
  }
  renderTransactions(transactions);
}
