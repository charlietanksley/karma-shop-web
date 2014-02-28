var Backbone = require('exoskeleton')
  , fn = require('../fn')

module.exports = Backbone.View.extend({
  el: '.content'

, initialize: function() {
    this.collection.on("sync", this.render.bind(this))
  }

, template: '<div class="product-listing"></div>'

, render: function() {
    var ProductsView = require('../../templates/products.jsx')
      , React = require('react')
      , data = { products: this.collection }

    this.el.innerHTML = this.template
    var component = document.getElementsByClassName('product-listing')[0]

    React.renderComponent(new ProductsView(data), component)
    return this
  }
})