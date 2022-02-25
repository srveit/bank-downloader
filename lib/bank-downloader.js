'use strict'

const BankDownloader = () => {
  const getTransactions = () => true

  return Object.freeze({ getTransactions })
}

exports.BankDownloader = BankDownloader
