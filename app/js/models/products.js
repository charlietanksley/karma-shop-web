var Product = require('./product')
  , Customer = require('./customer')
  , fn = require('../fn')

module.exports = Backbone.Collection.extend({
  model: Product
, url: '/api/store.json'

, initialize: function(options) {
    this.customerName = options.customerName
  }

, fetch: function(options) {
    options = options === undefined ? {} : options
    options.data = options.data === undefined ? {} : options.data
    options.data = fn.extend(options.data, {customerName: this.customerName})

    return Backbone.Collection.prototype.fetch.call(this, options)
  }

, parse: function(response) {
    var customer = response.store.customer,
        products = response.store.products

    this.customer = new Customer(customer)
    return products
  }
})
