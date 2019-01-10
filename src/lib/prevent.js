const { tap } = require('tinyfunk')

const prevent = e =>
  e.preventDefault()

module.exports = tap(prevent)
