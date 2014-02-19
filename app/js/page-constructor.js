module.exports = {
  sidebar: function() {
    var PotentialCustomerListing = require('./views/potential-customer-listing-view')
      , PotentialCustomers = require('./models/potential-customers')
      , potentialCustomers = new PotentialCustomers()

    potentialCustomers.fetch()
    new PotentialCustomerListing({collection: potentialCustomers})
  }

  , treasuresFor: function(term) {
      var Treasures = require('./models/treasures')
        , treasures = new Treasures({customerName: term})
        , TreasureView = require('./views/treasure-view')

      treasures.fetch()
      new TreasureView({collection: treasures})
    }
}
