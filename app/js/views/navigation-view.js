var Backbone = require('exoskeleton')

module.exports = Backbone.View.extend({
  el: '.main-nav'

, initialize: function() {
    this.collection.on("sync", this.render.bind(this))
  }

, template: '<div class="nav-holder"></div>'

, render: function() {
    var NavigationTemplate = require('../../templates/navigation.jsx')
      , React = require('react')
      , data = { potentialCustomers: this.collection }

    this.el.innerHTML = this.template
    var component = document.getElementsByClassName('nav-holder')[0]

    React.renderComponent(new NavigationTemplate(data), component)
    return this
  }
})