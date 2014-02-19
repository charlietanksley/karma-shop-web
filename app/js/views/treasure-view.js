var Backbone = require('exoskeleton')

module.exports = Backbone.View.extend({
  el: '.content'

, initialize: function() {
    this.collection.on("sync", this.setCustomer.bind(this))
    this.collection.on("sync", this.render.bind(this))
  }

, setCustomer: function() {
    this.customer = this.collection.customer
  }

, template: '<div class="treasure-listing"></div>'

, render: function() {
    var TreasureView = require('../../templates/treasures.jsx')
      , React = require('react')
      , data = { customer: this.customer,
                 treasures: this.collection }

    this.el.innerHTML = this.template
    var component = document.getElementsByClassName('treasure-listing')[0]

    React.renderComponent(new TreasureView(data), component)
    return this
  }
})