class Transaction {
  constructor(date, amount) {
    this.date = date;
    this.amount = parseFloat(amount.toFixed(2));
  }
}

module.exports = Transaction;
