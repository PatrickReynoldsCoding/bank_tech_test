const Account = require("./account");
const Transaction = require("./transaction");

const transaction = new Transaction("01/05/2022", 10);
const transaction2 = new Transaction("02/05/2022", 20);
const transaction3 = new Transaction("05/05/2022", -2);
const transaction4 = new Transaction("07/05/2022", -5.5);

const account = new Account();
account.newTransaction(transaction);
account.newTransaction(transaction2);
account.newTransaction(transaction3);
account.newTransaction(transaction4);

console.log(account.statement());
