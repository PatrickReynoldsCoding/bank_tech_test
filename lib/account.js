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
    return `date || credit || debit || balance\n${this.transactions[0].getDate} || ${this.transactions[0].getAmount} || || ${this.balance}\n${this.transactions[1].getDate} || ${this.transactions[1].getAmount} || || ${this.balance}`
  }
  // NEEDS A MAP AND A VARIABLE TO ADD BALANCE AT TIME OF TRANSACTION
  // APPEND BALANCE ONTO TRANSACTION WHEN PUSHED
  // SOLUTION: GOOGLE ADD PROPERTY TO OBJECT

  newTransaction (transaction) {
    transaction.balanceAfterTransaction = (transaction.getAmount + this.balance)
    this.transactions.push(transaction)
    this.balance += transaction.getAmount
  }
}

module.exports = Account
