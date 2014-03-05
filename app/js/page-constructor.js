module.exports = {
  landingPage: function(text) {
    var LandingPage = require('./views/landing-page-view')

    new LandingPage().render()
  }

, productsIndex: function() {
    var Products = require('./models/products')
      , ProductsView = require('./views/products-view')
      , products = new Products()

    products.fetch()
    new ProductsView({collection: products})
  }

, productsNew: function() {
    var Product = require('./models/product')
      , NewProductView = require('./views/new-product-view')

    new NewProductView({model: new Product()}).render()
  }

, sidebar: function() {
    var PotentialCustomerListing = require('./views/potential-customer-listing-view')
      , PotentialCustomers = require('./models/potential-customers')
      , potentialCustomers = new PotentialCustomers()

    potentialCustomers.fetch()
    new PotentialCustomerListing({collection: potentialCustomers})
  }

, shop: function(term) {
    var Store = require('./models/store')
      , StoreView = require('./views/store-view')
      , store = new Store({customerName: term})

    store.fetch()
    new StoreView({collection: store})
  }

, treasuresFor: function(term) {
    var Treasures = require('./models/treasures')
      , treasures = new Treasures({customerName: term})
      , TreasureView = require('./views/treasure-view')

    treasures.fetch()
    new TreasureView({collection: treasures})
  }
}
