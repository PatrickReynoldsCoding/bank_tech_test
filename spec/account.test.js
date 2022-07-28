const Account = require("../lib/account");

describe('account class', () => {
  it('shows the balance as 0', () => {
  account = new Account()
  
  expect(account.showBalance()).toBe(0);
  })
})
