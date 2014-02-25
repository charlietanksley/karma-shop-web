module.exports = {
  introText: function(text) {
    var IntroText = require('./views/intro-text-view')

    new IntroText().render({text: text})
  }

, sidebar: function() {
    var PotentialCustomerListing = require('./views/potential-customer-listing-view')
      , PotentialCustomers = require('./models/potential-customers')
      , potentialCustomers = new PotentialCustomers()

    potentialCustomers.fetch()
    new PotentialCustomerListing({collection: potentialCustomers})
  }

, shop: function(term) {
    var Products = require('./models/products')
      , ProductsView = require('./views/products-view')
      , products = new Products({customerName: term})

    products.fetch()
    new ProductsView({collection: products})
  }

, treasuresFor: function(term) {
    var Treasures = require('./models/treasures')
      , treasures = new Treasures({customerName: term})
      , TreasureView = require('./views/treasure-view')

    treasures.fetch()
    new TreasureView({collection: treasures})
  }
}
