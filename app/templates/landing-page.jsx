/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  render: function() {
    return(
      <div className='landing-page-text'>

      <p className='landing-page-welcome'>
        You have all that karma sitting in the (chatroom) bank.
        Are you really enjoying it?  Are you really <i>living?</i>
        Don't wait until retirement to enjoy your karma.  Treat
         yourself to something nice today.  You've earned it.
      </p>

      <div className='landing-page-how-it-works'>
        <h2 className='centered'>How it works</h2>

        <div className='landing-page-shopping-guide'>
          <h3 className='centered'>Shopping</h3>
          <p>
            Seriously, all that karma just sitting in the bank is so, so
            sad.  To spend it, just navigate to one of your pages (to the page
            for 'firstname lastname' or maybe 'firstname_lastname'), head over
            to the shop, and start clicking.  It's really that easy.
          </p>

          <p>Please do note that</p>
          <ul>
             <li>You can buy items for <i>any</i> term with karma.  You needn't 'own' the term to buy something for it.</li>
             <li>All sales are <i>final</i> and immediate.</li>
             <li>The purchase price is withdrawn from your actual karma score.</li>
          </ul>
        </div>

        <div className='landing-page-product-guide'>
          <h3 className='centered'>Creating products</h3>
          <p>
            Part of the fun of Ye Old Karma Shoppe is creating new products.
            To do that, visit the new product page, upload an image (please keep
            it small if you can!), fill in the price and other details, then let
            it rip.  Now other users can buy your awesome swag.
          </p>
        </div>
      </div>
      </div>
    )
  }
})