/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  render: function() {
    var listNodes = this.props.products.map(function (product, index) {
      return (
        <li className="product-list">
          <div className="product-list-visual">
            <img className="product-picture" src={ product.get('src') } alt={ product.get('name') } />
          </div>
          <div className="product-list-details">
            <dl>
              <dt>Price (in karma points)</dt>
              <dd><span className="product-price">{ product.get('price') }</span></dd>
              <dt>Name</dt>
              <dd>{ product.get('name') }</dd>
            </dl>
          </div>
        </li>
      )
    }, this)

    return(
      <ul className="plain">
      { listNodes }
      </ul>
    )
  }
})