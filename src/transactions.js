export function createTransaction(
  description,
  amount = 0,
  category = "expense",
  expense = true,
  date = new Date(),
) {
  return { description, amount, category, expense, date };
}

export function convert_to_date(trans) {
  trans.date = new Date(trans.date);
  return null;
}
