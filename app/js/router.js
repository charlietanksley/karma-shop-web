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
    var text = "You have all that karma sitting in the (chatroom) bank.  Are you really enjoying it?  Are you really living? Don't wait until retirement to enjoy your karma.  Treat yourself to something nice today.  You've earned it."
    pageConstructor.introText(text)
    pageConstructor.sidebar() }

, products: function() {
   pageConstructor.productsIndex()
  }

, productsNew: function() {
    pageConstructor.sidebar()
    pageConstructor.productsNew()
  }

, shop: function(identifier) {
    pageConstructor.sidebar()
    pageConstructor.shop(identifier)
  }

, treasures: function(identifier) {
    pageConstructor.sidebar()
    pageConstructor.treasuresFor(identifier)
  }
})
