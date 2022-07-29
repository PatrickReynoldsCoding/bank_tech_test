const Account = require("../lib/account");
const Transaction = require("../lib/transaction");

describe("Integration tests", () => {
  it("shows a statement header with two transactions summed beneath", () => {
    const transaction = new Transaction("01/05/2022", 10);
    const transaction2 = new Transaction("02/05/2022", 20);

    const account = new Account();
    account.newTransaction(transaction);
    account.newTransaction(transaction2);

    expect(account.statement()).toBe(
      "date || credit || debit || balance\n01/05/2022 || 10 || || 10\n02/05/2022 || 20 || || 30\n"
    );
  });
  it("shows a statement header with three transactions summed beneath", () => {
    const transaction = new Transaction("01/05/2022", 10);
    const transaction2 = new Transaction("02/05/2022", 20);
    const transaction3 = new Transaction("05/05/2022", -2);

    const account = new Account();
    account.newTransaction(transaction);
    account.newTransaction(transaction2);
    account.newTransaction(transaction3);

    expect(account.statement()).toBe(
      "date || credit || debit || balance\n01/05/2022 || 10 || || 10\n02/05/2022 || 20 || || 30\n05/05/2022 || || 2 || 28\n"
    );
  });

  it("shows a statement header with four transactions summed beneath", () => {
    const transaction = new Transaction("01/05/2022", 10);
    const transaction2 = new Transaction("02/05/2022", 20);
    const transaction3 = new Transaction("05/05/2022", -2);
    const transaction4 = new Transaction("07/05/2022", -5.5);

    const account = new Account();
    account.newTransaction(transaction);
    account.newTransaction(transaction2);
    account.newTransaction(transaction3);
    account.newTransaction(transaction4);

    expect(account.statement()).toBe(
      "date || credit || debit || balance\n01/05/2022 || 10 || || 10\n02/05/2022 || 20 || || 30\n05/05/2022 || || 2 || 28\n07/05/2022 || || 5.5 || 22.5\n"
    );
  });
});
