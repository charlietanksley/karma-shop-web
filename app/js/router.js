var Backbone = require('exoskeleton')
  , pageConstructor = require('./page-constructor')

module.exports = Backbone.Router.extend({
  routes: {
    '': 'index'
  , 'treasures/:identifier/shop': 'shop'
  , 'treasures/*identifier': 'treasures'
  }

, index: function(){
    pageConstructor.sidebar()
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
