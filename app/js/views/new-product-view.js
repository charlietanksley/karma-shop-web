var Backbone = require('exoskeleton')
  , fn = require('../fn')

module.exports = Backbone.View.extend({
  el: '.content'

, initialize: function() {
    var Products = require('../models/products')

    fn.bind(this, this.submit)
    this.collection = new Products()
    this.collection.fetch()
  }

, submit: function(context, state) {
    var Product = require('../models/product')
      , product = new Product(state)
      , Router = require('../router')
      , router = new Router()

    var ProductsView = require('./products-view')

    context.collection.create(product)
    new ProductsView({collection: context.collection})

    router.navigate("/products")
  }

, template: '<div class="new-product"></div>'

, render: function() {
    var NewProduct = require('../../templates/new-product.jsx')
      , React = require('react')
      , data = { model: this.model
               , submit: fn.curry(this.submit, this) }

    this.el.innerHTML = this.template
    var component = document.getElementsByClassName('new-product')[0]

    React.renderComponent(new NewProduct(data), component)
    return this
  }
})