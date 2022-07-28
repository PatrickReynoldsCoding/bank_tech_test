const Account = require('../lib/account')



describe('Account class', () => {

  it('shows the balance as 0', () => {
    const account = new Account()

    expect(account.showBalance()).toBe(0)
  })

  xit('shows just the headers for statement', () => {
    const account = new Account()

    expect(account.statement()).toBe('date || credit || debit || balance')
  })

  it('shows an empty array', () => {
    const account = new Account()

    expect(account.showTransactions()).toEqual([])
  })

  it('shows a transaction', () => {
    const mockedTransaction = {
      getDate: '01/05/2022',
      getAmount: 10
    }
    const account = new Account()
    account.newTransaction(mockedTransaction)

    expect(account.showTransactions()).toEqual([{
      getDate: '01/05/2022',
      getAmount: 10
    }])
  })

  it('shows a statement header with just the transaction date beneath', () => {
    const mockedTransaction = {
      getDate: '01/05/2022',
      getAmount: 10
    }
    const account = new Account()
    account.newTransaction(mockedTransaction)

    expect(account.statement()).toBe("date || credit || debit || balance\n01/05/2022")
  })

  xit('shows a statement header with the transaction datebeneath', () => {
    const mockedTransaction = {
      getDate: '01/05/2022',
      getAmount: 10
    }
    const account = new Account()
    account.newTransaction(mockedTransaction)

    expect(account.statement()).toBe("date || credit || debit || balance\n01/05/2022 || 10 ")
  })
})
