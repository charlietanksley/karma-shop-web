var PotentialCustomer = require('./potential-customer')
, fn = require('../fn')

module.exports = Backbone.Collection.extend({
  model: PotentialCustomer
, url: '/api/potential_customers.json'

, parse: function(response) {
    var convertToPotentialCustomers = function(entry) {
      return { name: entry }
    }

    return fn.map(response.potentialCustomers,
                  convertToPotentialCustomers)
  }
})
