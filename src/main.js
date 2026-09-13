console.log("JavaScript Activated.");

import { loadTransactions } from "./storage.js";
import { renderTransactions, addTransaction } from "./ui.js";
const Transaction = {
  description: "Groceries",
  amount: 100,
  expense: true,
  category: "Food",
  date: new Date("2026-08-09"),
};
const transaction1 = {
  description: "Salary",
  amount: 2000,
  expense: false,
  category: "Salary",
  date: new Date("2026-08-09"),
};
const transaction2 = {
  description: "Rent",
  amount: 550,
  expense: true,
  category: "Rent",
  date: new Date("2026-08-09"),
};
const transactions = loadTransactions("TRANSACTIONS") || [
  Transaction,
  transaction1,
  transaction2,
];

const form_transaction = document.querySelector("#transaction-form");

const search_bar = document.querySelector("#search-box");
const select_bar = document.querySelector("#category-select");
const sort_select = document.querySelector("#sort");

renderTransactions(transactions);

form_transaction.addEventListener("submit", (event) => {
  addTransaction(event, transactions);
});
search_bar.addEventListener("input", () => renderTransactions(transactions));
select_bar.addEventListener("change", () => renderTransactions(transactions));
document.querySelectorAll('input[name="mode"]').forEach((radio) => {
  radio.addEventListener("change", () => renderTransactions(transactions));
});
sort_select.addEventListener("change", () => renderTransactions(transactions));
