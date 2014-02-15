var reqwest = require('reqwest')

module.exports = {
  all: function() {
    return reqwest({
      url: '/api/potential_customers.json'
    })
  }
}