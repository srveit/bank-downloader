'use strict'

const { BankDownloader } = require('../lib/bank-downloader.js')
const { URL } = require('url')
const { fixture } = require('./helpers/fixture.js')
const { mockServer } = require('./helpers/mock-server.js')

const futureDate = 'Fri, 01 Jan 2023 00:00:00 GMT'

describe('Bank Downloader', () => {
  let server, host, domain, baseUrl, bankDownloader

  beforeAll(async () => {
    server = mockServer([
      {
        method: 'post',
        path: '/',
        name: 'postForm'
      },
      {
        method: 'get',
        path: '/',
        name: 'getPage'
      }
    ])
    await server.start()
  })
  afterAll(() => server.stop())
  beforeEach(() => {
    baseUrl = process.env.SERVER_BASE_URL
    host = process.env.SERVER_HOST
    const url = new URL(baseUrl)
    domain = url.hostname
    bankDownloader = BankDownloader()
  })

  it('should have a getTransactions', () =>
    expect(bankDownloader.getTransactions).toEqual(expect.any(Function)))
})
