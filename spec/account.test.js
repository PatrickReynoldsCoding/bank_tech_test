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
})
