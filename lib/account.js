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
