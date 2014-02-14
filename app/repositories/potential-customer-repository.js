$ = require('../js/dollar')

module.exports = {
  all: function() {
    return $.ajax({
      url: '/api/potential_customers.json'
    })
  }
}