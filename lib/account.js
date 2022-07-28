class Account {
  constructor() {
    this.balance = 0;
  }

  showBalance() {
    return this.balance;
  }

  statement() {
    return "date || credit || debit || balance";
  }

}

module.exports = Account;