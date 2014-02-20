var Treasure = require('./treasure')
  , fn = require('../fn')
  , Customer = require('./customer')

module.exports = Backbone.Collection.extend({
  initialize: function(options) {
    this.customerName = options.customerName
  }

, model: Treasure
, url: '/api/customer_treasures.json'

, fetch: function(options) {
    options = options === undefined ? {} : options
    options.data = options.data === undefined ? {} : options.data
    options.data = fn.extend(options.data, {customerName: this.customerName})

    return Backbone.Collection.prototype.fetch.call(this, options)
  }

, parse: function(response) {
    var customer = response.treasures.customer,
        treasures = response.treasures.treasures

    this.customer = new Customer(customer)
    return treasures
  }
})
