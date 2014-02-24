/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

module.exports = {
  drawRoutes: function(app) {
    app.get('/api/potential_customers.json', function(req, res){
      res.json({'potentialCustomers': [
        'charlie tanksley',
        'some really long thing with such a long name you say "wow" that is so long',
        'CBQ',
        'charlie_tanksley',
        'jeremy',
        'something good',
        'hahahahahah']})
    })

    app.post('/api/purchases.json', function(req, res) {
      res.json({store: {
        customer: {
          id: 1
        , availableKarma: 100
        , name: req.body.customerName
        }
      , products: [
        {
          id: req.body.productId,
          price: 10,
          unitsOwned: 0,
          name: 'retro computer monitor',
          src: '/img/computer-monitor.jpg',
          attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
          attributionText: 'Marcin Wichary'
        }
      ]
      }})
    })

    app.get('/api/customer_treasures.json', function(req, res) {
      res.json({treasures: {
        customer: {
          id: 1
        , name: req.query.customerName
        }
      , treasures: [
        {
          name: 'retro computer monitor',
          src: '/img/computer-monitor.jpg',
          attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
          attributionText: 'Marcin Wichary'
        }
      , {
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      ]
      }})
    })

    app.get('/api/stores.json', function(req, res){
      res.json({store: {
        customer: {
          id: 1
        , availableKarma: 100
        , name: req.query.customerName
        }
      , products: [
        {
          id: 1,
          price: 10,
          unitsOwned: 0,
          name: 'retro computer monitor',
          src: '/img/computer-monitor.jpg',
          attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
          attributionText: 'Marcin Wichary'
        }
      , {
        id: 2,
        price: 2,
        unitsOwned: 10,
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 3,
        price: 5,
        unitsOwned: 0,
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 4,
        price: 20,
        unitsOwned: 0,
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 5,
        price: 3,
        unitsOwned: 0,
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 6,
        price: 3,
        unitsOwned: 0,
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 7,
        price: 200,
        unitsOwned: 0,
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 9,
        price: 2,
        unitsOwned: 1,
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 10,
        price: 10,
        unitsOwned: 3,
        name: 'retro computer monitor',
        src: '/img/computer-monitor.jpg',
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      ]
      }})
    })
  }
}