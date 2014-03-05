var Backbone = require('exoskeleton')

module.exports = Backbone.View.extend({
  el: '.content'

, render: function(args) {
    var LandingPage = require('../../templates/landing-page.jsx')
      , ViewRenderer = require('./view-renderer').ViewRenderer
      , viewRenderer

    viewRenderer = new ViewRenderer({view: this
                                    , reactTemplate: new LandingPage()
                                    , className: 'page-introduction'})

    viewRenderer.render()
    return this
  }
})