var Backbone = require('exoskeleton')

module.exports = Backbone.View.extend({
  el: '.sidebar'

, initialize: function() {
    this.collection.on("sync", this.render.bind(this))
  }
, template: '<div class="potential-customer-listing"></div>'

, render: function() {
    var PotentialCustomerView = require('../../templates/potential-customers.jsx')
      , React = require('react')
      , data = { potentialCustomers: this.collection }

    this.el.innerHTML = this.template
    var component = document.getElementsByClassName('potential-customer-listing')[0]

    React.renderComponent(new PotentialCustomerView(data), component)
    return this
  }
})