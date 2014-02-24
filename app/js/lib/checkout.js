var fn = require('../fn')
  , Purchase = require('../models/purchase')

module.exports = function(customer) {
  this.customer = customer

  this.process =  function(product) {
    this.product = product

    this.makePurchase()
    this.decrementKarma()
    this.incrementUnitsOwned()
  }

  this.decrementKarma = function() {
    var customer = this.customer
      , product = this.product
    var availableKarma = customer.get('availableKarma')
      , price = product.get('price')

    customer.set('availableKarma', availableKarma - price)
  }

  this.incrementUnitsOwned = function(product) {
    var unitsOwned = this.product.get('unitsOwned') + 1
    this.product.set('unitsOwned', unitsOwned)
  }

  this.makePurchase = function(customer, product) {
    var attrs = {
      customerName: this.customer.get('name')
    , productId: this.product.get('id')
    }
      , purchase = new Purchase(attrs)

    purchase.save()
  }
}