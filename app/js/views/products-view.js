var Backbone = require('exoskeleton')
  , fn = require('../fn')

module.exports = Backbone.View.extend({
  el: '.content'

, initialize: function() {
    this.collection.on("sync", this.setCustomer.bind(this))
    this.collection.on("sync", this.render.bind(this))
  }

, purchase: function(customer, product) {
    var Checkout = require('../lib/checkout')
      , checkout = new Checkout(customer)

    return function() {
      checkout.process(product)
    }
  }

, setCustomer: function() {
    this.customer = this.collection.customer
  }

, template: '<div class="product-listing"></div>'

, render: function() {
    var ProductView = require('../../templates/products.jsx')
      , React = require('react')
      , data = { customer: this.customer,
                 products: this.collection,
                 buyNow: fn.bind(this, this.purchase, this.customer) }

    this.el.innerHTML = this.template
    var component = document.getElementsByClassName('product-listing')[0]

    React.renderComponent(new ProductView(data), component)
    return this
  }
})