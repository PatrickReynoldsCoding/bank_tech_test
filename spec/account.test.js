const Account = require("../lib/account");

describe('Account class', () => {
  it('shows the balance as 0', () => {
  account = new Account()
  
  expect(account.showBalance()).toBe(0);
  })

  it('shows just the headers for statement', () => {
    account = new Account()
    
    expect(account.statement()).toBe("date || credit || debit || balance");
    })

  it('shows an empty array', () => {

    account = new Account()

    
    expect(account.showTransactions()).toEqual([]);
    })
  
  it('shows a transaction', () => {
    const mockedTransaction = {
      getDate: "01/05/2022",
      getAmount: 10
    }
    account = new Account()
    account.newTransaction(mockedTransaction)
    
    expect(account.showTransactions()).toEqual([{
      getDate: "01/05/2022",
      getAmount: 10
    }])
    })
  xit('shows a transaction', () => {
    const mockedTransaction = {
      getDate: "01/05/2022",
      getAmount: 10
    }
    account = new Account()
    account.newTransaction(mockedTransaction)
    
    expect(account.statement()).toBe("date || credit || debit || balance \n '01/05/2022', 10 ");
    })
})
