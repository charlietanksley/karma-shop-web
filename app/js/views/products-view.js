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

, template: '<div class="product-listing"></div>'

, render: function() {
    var ProductView = require('../../templates/products.jsx')
      , React = require('react')
      , data = { customer: this.customer,
                 products: this.collection }

    this.el.innerHTML = this.template
    var component = document.getElementsByClassName('product-listing')[0]

    React.renderComponent(new ProductView(data), component)
    return this
  }
})