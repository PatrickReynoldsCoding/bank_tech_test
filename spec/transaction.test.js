const Transaction = require('../lib/transaction')

describe('Transaction class', () => {
  it('returns the date', () => {
    const transaction = new Transaction('01/05/2022', 10)

    expect(transaction.date).toBe('01/05/2022')
  })

})