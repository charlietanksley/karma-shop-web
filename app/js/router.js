var Backbone = require('exoskeleton')
  , pageConstructor = require('./page-constructor')

module.exports = Backbone.Router.extend({
  routes: {
    '': 'index'
  , 'treasures/*identifier': 'treasures'
  }

, index: function(){
    pageConstructor.sidebar()
  }

, treasures: function(identifier) {
    pageConstructor.sidebar()
    pageConstructor.treasuresFor(identifier)
  }
})
