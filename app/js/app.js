(function(){
  window.Backbone = require('exoskeleton')
  var Router = require('./router')

  new Router()
  Backbone.history.start({pushState: true})
})()
