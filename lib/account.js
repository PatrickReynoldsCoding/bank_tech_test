class Account {
  constructor () {
    this.balance = 0
    this.transactions = []
  }

  showBalance () {
    return this.balance
  }

  showTransactions () {
    return this.transactions
  }

  statement () {
    return `date || credit || debit || balance\n${this.transactions[0].getDate} || ${this.transactions[0].getAmount} `
  }

  newTransaction (transaction) {
    this.transactions.push(transaction)
  }
}

module.exports = Account
