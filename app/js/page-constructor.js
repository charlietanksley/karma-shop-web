module.exports = {
  sidebar: function() {
    var PotentialCustomerListing = require('./potential-customer-listing')
      , PotentialCustomers = require('./models/potential-customers')
      , potentialCustomers = new PotentialCustomers()

    potentialCustomers.fetch()
    new PotentialCustomerListing({collection: potentialCustomers})
  }
}
