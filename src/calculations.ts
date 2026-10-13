export function FindTotal(transactions :{expense: boolean ; amount: number}[]): {totalIncome: number, totalExpenses: number, balance: number} {
  const totalIncome = transactions.reduce((total, trans) => {
    if (trans.expense === false) {
      return total + trans.amount;
    }
    return total;
  }, 0);
  const totalExpenses = transactions.reduce((total, trans) => {
    if (trans.expense) {
      return total + trans.amount;
    }
    return total;
  }, 0);
  const balance = totalIncome - totalExpenses;
  return { totalIncome, totalExpenses, balance };
}

export function getCategoryTotals(transactions) {
  const category_totals = {};
  transactions.reduce((category_totals, trans) => {
    if (!trans.expense) return category_totals;
    if (!category_totals[trans.category]) {
      category_totals[trans.category] = 0;
    }
    category_totals[trans.category] += trans.amount;
    return category_totals;
  }, category_totals);
  return category_totals;
}
