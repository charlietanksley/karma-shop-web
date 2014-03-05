/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
 componentDidMount: function() {
    this.props.customer.on('change', function() {
      this.forceUpdate()
    }.bind(this))
  }

, render: function() {
    var checkout = require('../js/lib/checkout')

    var totalNumberOfItems = this.props.products.length

    var classForListItem = function(index) {
      var i = index + 1
      if (i % 2 === 0) {
        return 'store-item-right'
      } else if (i === totalNumberOfItems) {
        return 'store-item-last'
      } else {
        return 'store-item-left'
      }
    }

    var listNodes = this.props.products.map(function (product, index) {
      return (
        <li className={ classForListItem(index) }>
          <div className="store-item-visual">
            <img className="store-item-picture" src={ product.get('src') } alt={ product.get('name') } />
          </div>
          <div className="store-item-details">
            <dl>
              <dt>Price (in karma points)</dt>
              <dd><span className="store-item-price">{ product.get('price') }</span></dd>
              <dt>Name</dt>
              <dd>{ product.get('name') }</dd>
              <dt>Quantity owned</dt>
              <dd>{ product.get('unitsOwned') }</dd>
            </dl>
            <button className="buy-now" onClick={ this.props.buyNow(product) }>Buy Now!</button>
          </div>
        </li>
      )
    }, this)

    return(
      <section className="store">
      <h2 className="store-welcome">Get busy shopping</h2>

      <p className="karma-available">
      { this.props.customer.get('name') } has <span className="karma-number">{ this.props.customer.get('availableKarma') }</span> karma available
      </p>
      <ul className="plain">
      { listNodes }
      </ul>
      </section>
    )
  }
})