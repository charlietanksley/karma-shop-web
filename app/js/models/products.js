var Product = require('./product')

module.exports = Backbone.Collection.extend({
  model: Product
, url: '/api/products.json'

, parse: function(response) {
    return response.products
  }
})
