var fn = require('../fn')
  , Purchase = require('../models/purchase')

module.exports = function(customer) {
  this.customer = customer

  this.process =  function(product, insufficientFundsCallback) {
    this.product = product

    if (this.checkPurchaseAllowed(insufficientFundsCallback)) {
      this.makePurchase()
      this.decrementKarma()
      this.incrementUnitsOwned()
    }
  }

  this.decrementKarma = function() {
    this.customer.set('availableKarma', this.karmaDecremented())
  }

  this.karmaDecremented = function() {
    return this.customer.get('availableKarma') - this.product.get('price')
  }

  this.incrementUnitsOwned = function() {
    var unitsOwned = this.product.get('unitsOwned') + 1
    this.product.set('unitsOwned', unitsOwned)
  }

  this.checkPurchaseAllowed = function(callback) {
    var popupAlert = function() {
      alert('You cannot afford this item')
    }
    var notify = callback == undefined ? popupAlert : callback

    if (this.karmaDecremented() >= 0) {
      return true
    } else {
      notify()
      return false
    }
  }

  this.makePurchase = function() {
    var attrs = {
      customerName: this.customer.get('name')
    , productId: this.product.get('id')
    }
      , purchase = new Purchase(attrs)

    purchase.save()
  }
}