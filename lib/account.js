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
    const statementHeader = 'date || credit || debit || balance\n'
    let statementBody = ''
    this.transactions.map(transaction => {
      statementBody = statementBody + `${transaction.getDate} || ${transaction.getAmount} || || ${transaction.balanceAfterTransaction}\n`
    })
    return statementHeader + statementBody

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
