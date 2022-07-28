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
    return 'date || credit || debit || balance'
  }

  newTransaction (transaction) {
    this.transactions.push(transaction)
  }
}

module.exports = Account
