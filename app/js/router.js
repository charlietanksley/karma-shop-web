var Backbone = require('exoskeleton')
  , pageConstructor = require('./page-constructor')

module.exports = Backbone.Router.extend({
  routes: {
    '': 'index'
  , 'products': 'products'
  , 'products/new': 'productsNew'
  , 'treasures/:identifier/shop': 'shop'
  , 'treasures/*identifier': 'treasures'
  }

, index: function(){
    pageConstructor.landingPage()
  }

, products: function() {
   pageConstructor.productsIndex()
  }

, productsNew: function() {
    pageConstructor.productsNew()
  }

, shop: function(identifier) {
    pageConstructor.shop(identifier)
  }

, treasures: function(identifier) {
    pageConstructor.treasuresFor(identifier)
  }
})
