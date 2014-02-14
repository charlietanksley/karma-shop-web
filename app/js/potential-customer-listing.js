var Backbone = require('exoskeleton')

module.exports = Backbone.View.extend({
  el: '.sidebar'

, template: '<div class="potential-customer-listing"></div>'

, displayView: function(response) {
    var PotentialCustomerView = require('../views/potential-customer-view.jsx')
      , React = require('react')
      , data = { potentialCustomers: response.potentialCustomers }
    this.el.innerHTML = this.template
    var component = document.getElementsByClassName('potential-customer-listing')[0]

    React.renderComponent(new PotentialCustomerView(data), component)
  }

, render: function() {
    var PotentialCustomerRepository = require('../repositories/potential-customer-repository')
      , context = this

    PotentialCustomerRepository.all()
    .then(this.displayView.bind(context))
  }
})