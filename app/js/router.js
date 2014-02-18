var Backbone = require('exoskeleton')
  , pageConstructor = require('./page-constructor')

module.exports = Backbone.Router.extend({
  routes: {
    '': 'index'
  }

, index: function(){
    pageConstructor.sidebar()
  }
})
