var Backbone = require('exoskeleton')
  , fn = require('../fn')

module.exports = Backbone.View.extend({
  el: '.content'

, initialize: function() {
    fn.bind(this, this.submit)
  }

, submit: function(context, state) {
    var Product = require('../models/product')
      , product = new Product(state)
      , Router = require('../router')
      , router = new Router()

    product.save()
    router.navigate("/products", {trigger: true})
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