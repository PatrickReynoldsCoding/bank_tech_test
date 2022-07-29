class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  showBalance() {
    return this.balance;
  }

  showTransactions() {
    return this.transactions;
  }

  statement() {
    const statementHeader = "date || credit || debit || balance\n";
    let statementBody = "";
    this.transactions.map((transaction) => { //.reverse() could be added but this would break my tests
      if (transaction.amount > 0) {
        statementBody =
          statementBody +
          `${transaction.date} || ${transaction.amount} || || ${transaction.balanceAfterTransaction}\n`;
      } else {
        statementBody =
          statementBody +
          `${transaction.date} || || ${transaction.amount * -1} || ${
            transaction.balanceAfterTransaction
          }\n`;
      }
    });
    return statementHeader + statementBody;
  }

  newTransaction(transaction) {
    transaction.balanceAfterTransaction = transaction.amount + this.balance;
    this.transactions.push(transaction);
    this.balance += transaction.amount;
  }

  // transactionVerification(transaction) { //How would I check if an object matches a certain data type?
  //   transaction.hasOwnProperty('date', 'amount')

  // }
}

module.exports = Account;
