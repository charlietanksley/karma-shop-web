(function(){
  window.Backbone = require('exoskeleton')
  var Router = require('./router')

  new Router()
  Backbone.history.start({pushState: true})

  var NavigationView = require('./views/navigation-view')
    , PotentialCustomers = require('./models/potential-customers')
    , potentialCustomers = new PotentialCustomers()

  potentialCustomers.fetch()
  new NavigationView({collection: potentialCustomers})
})()
