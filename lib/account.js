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
    if (this.transactions.length == 2) {
    return `date || credit || debit || balance\n${this.transactions[0].getDate} || ${this.transactions[0].getAmount} || || ${this.transactions[0].balanceAfterTransaction}\n${this.transactions[1].getDate} || ${this.transactions[1].getAmount} || || ${this.transactions[1].balanceAfterTransaction}`
    } else {
      return `date || credit || debit || balance\n${this.transactions[0].getDate} || ${this.transactions[0].getAmount} || || ${this.transactions[0].balanceAfterTransaction}\n${this.transactions[1].getDate} || ${this.transactions[1].getAmount} || || ${this.transactions[1].balanceAfterTransaction}\n${this.transactions[2].getDate} || || ${this.transactions[2].getAmount*-1} || ${this.transactions[2].balanceAfterTransaction}`
    }
  }
  // NEEDS A MAP AND A VARIABLE TO ADD BALANCE AT TIME OF TRANSACTION




  newTransaction (transaction) {
    transaction.balanceAfterTransaction = (transaction.getAmount + this.balance);
    this.transactions.push(transaction);
    this.balance += transaction.getAmount;
  }


  // transactionVerification(transaction) { //How would I check if an object matches a certain data type?
  //   transaction.hasOwnProperty('getDate', 'getAmount') 
   
  // }



}

module.exports = Account
