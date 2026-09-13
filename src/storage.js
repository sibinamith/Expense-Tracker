export function loadTransactions(key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
}

export function saveTransactions(transactions) {
  const transact = JSON.stringify(transactions);
  localStorage.setItem("TRANSACTIONS", transact);
  return null;
}
