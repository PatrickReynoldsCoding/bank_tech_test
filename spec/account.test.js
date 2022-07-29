const Account = require("../lib/account");

describe("Account class", () => {
  it("shows the balance as 0", () => {
    const account = new Account();

    expect(account.showBalance()).toBe(0);
  });

  xit("shows just the headers for statement", () => {
    const account = new Account();

    expect(account.statement()).toBe("date || credit || debit || balance");
  });

  it("shows an empty array", () => {
    const account = new Account();

    expect(account.showTransactions()).toEqual([]);
  });

  xit("shows a transaction", () => {
    const mockedTransaction = {
      date: "01/05/2022",
      amount: 10,
    };
    const account = new Account();
    account.newTransaction(mockedTransaction);

    expect(account.showTransactions()).toEqual([
      {
        date: "01/05/2022",
        amount: 10,
      },
    ]);
  });

  xit("shows a statement header with just the transaction date beneath", () => {
    const mockedTransaction = {
      date: "01/05/2022",
      amount: 10,
    };
    const account = new Account();
    account.newTransaction(mockedTransaction);

    expect(account.statement()).toBe(
      "date || credit || debit || balance\n01/05/2022"
    );
  });

  xit("shows a statement header with the transaction beneath", () => {
    const mockedTransaction = {
      date: "01/05/2022",
      amount: 10,
    };
    const account = new Account();
    account.newTransaction(mockedTransaction);

    expect(account.statement()).toBe(
      "date || credit || debit || balance\n01/05/2022 || 10 || || 10"
    );
  });

  it("shows a transaction with the property balanceAfterTransaction", () => {
    const mockedTransaction = {
      date: "01/05/2022",
      amount: 10,
    };

    const account = new Account();
    account.newTransaction(mockedTransaction);
    expect(account.showTransactions()[0]).toMatchObject({
      date: "01/05/2022",
      amount: 10,
      balanceAfterTransaction: 10,
    });
  });

  it("shows balanceAfterTransaction summing after each transaction", () => {
    const mockedTransaction = {
      date: "01/05/2022",
      amount: 10,
    };
    const mockedTransaction2 = {
      date: "02/05/2022",
      amount: 20,
    };

    const account = new Account();
    account.newTransaction(mockedTransaction);
    account.newTransaction(mockedTransaction2);
    expect(account.showTransactions()[0]).toMatchObject({
      date: "01/05/2022",
      amount: 10,
      balanceAfterTransaction: 10,
    });
    expect(account.showTransactions()[1]).toMatchObject({
      date: "02/05/2022",
      amount: 20,
      balanceAfterTransaction: 30,
    });
  });

  it("shows balanceAfterTransaction summing after each transaction, 3 examples", () => {
    const mockedTransaction = {
      date: "01/05/2022",
      amount: 10,
    };
    const mockedTransaction2 = {
      date: "02/05/2022",
      amount: 20,
    };
    const mockedTransaction3 = {
      date: "05/05/2022",
      amount: -2,
    };

    const account = new Account();
    account.newTransaction(mockedTransaction);
    account.newTransaction(mockedTransaction2);
    account.newTransaction(mockedTransaction3);
    expect(account.showTransactions()[0]).toMatchObject({
      date: "01/05/2022",
      amount: 10,
      balanceAfterTransaction: 10,
    });
    expect(account.showTransactions()[1]).toMatchObject({
      date: "02/05/2022",
      amount: 20,
      balanceAfterTransaction: 30,
    });
    expect(account.showTransactions()[2]).toMatchObject({
      date: "05/05/2022",
      amount: -2,
      balanceAfterTransaction: 28,
    });
  });

  it("shows balanceAfterTransaction summing after each transaction, 4 examples", () => {
    const mockedTransaction = {
      date: "01/05/2022",
      amount: 10,
    };
    const mockedTransaction2 = {
      date: "02/05/2022",
      amount: 20,
    };
    const mockedTransaction3 = {
      date: "05/05/2022",
      amount: -2,
    };
    const mockedTransaction4 = {
      date: "07/05/2022",
      amount: -5.5,
    };

    const account = new Account();
    account.newTransaction(mockedTransaction);
    account.newTransaction(mockedTransaction2);
    account.newTransaction(mockedTransaction3);
    account.newTransaction(mockedTransaction4);
    expect(account.showTransactions()[0]).toMatchObject({
      date: "01/05/2022",
      amount: 10,
      balanceAfterTransaction: 10,
    });
    expect(account.showTransactions()[1]).toMatchObject({
      date: "02/05/2022",
      amount: 20,
      balanceAfterTransaction: 30,
    });
    expect(account.showTransactions()[2]).toMatchObject({
      date: "05/05/2022",
      amount: -2,
      balanceAfterTransaction: 28,
    });
    expect(account.showTransactions()[3]).toMatchObject({
      date: "07/05/2022",
      amount: -5.5,
      balanceAfterTransaction: 22.5,
    });
  });

  //NOTE TO COACH: not sure how to test this as a transactionVerification function would check for properties in the mock, but would need to check for functions in the final code
  // it('pass wrong object type to account', () => {
  //   const mockedTransaction = {
  //     date: '01/05/2022',
  //     amount: 10
  //   }

  //   const account = new Account()

  //   expect(account.transactionVerification(mockedTransaction)).toBeTruthy()
  // })

  it("shows a statement header with two transactions summed beneath", () => {
    const mockedTransaction = {
      date: "01/05/2022",
      amount: 10,
    };
    const mockedTransaction2 = {
      date: "02/05/2022",
      amount: 20,
    };
    const account = new Account();
    account.newTransaction(mockedTransaction);
    account.newTransaction(mockedTransaction2);

    expect(account.statement()).toBe(
      "date || credit || debit || balance\n01/05/2022 || 10 || || 10\n02/05/2022 || 20 || || 30\n"
    );
  });
  it("shows a statement header with three transactions summed beneath", () => {
    const mockedTransaction = {
      date: "01/05/2022",
      amount: 10,
    };
    const mockedTransaction2 = {
      date: "02/05/2022",
      amount: 20,
    };
    const mockedTransaction3 = {
      date: "05/05/2022",
      amount: -2,
    };

    const account = new Account();
    account.newTransaction(mockedTransaction);
    account.newTransaction(mockedTransaction2);
    account.newTransaction(mockedTransaction3);

    expect(account.statement()).toBe(
      "date || credit || debit || balance\n01/05/2022 || 10 || || 10\n02/05/2022 || 20 || || 30\n05/05/2022 || || 2 || 28\n"
    );
  });

  it("shows a statement header with four transactions summed beneath", () => {
    const mockedTransaction = {
      date: "01/05/2022",
      amount: 10,
    };
    const mockedTransaction2 = {
      date: "02/05/2022",
      amount: 20,
    };
    const mockedTransaction3 = {
      date: "05/05/2022",
      amount: -2,
    };
    const mockedTransaction4 = {
      date: "07/05/2022",
      amount: -5.5,
    };

    const account = new Account();
    account.newTransaction(mockedTransaction);
    account.newTransaction(mockedTransaction2);
    account.newTransaction(mockedTransaction3);
    account.newTransaction(mockedTransaction4);

    expect(account.statement()).toBe(
      "date || credit || debit || balance\n01/05/2022 || 10 || || 10\n02/05/2022 || 20 || || 30\n05/05/2022 || || 2 || 28\n07/05/2022 || || 5.5 || 22.5\n"
    );
  });
});
