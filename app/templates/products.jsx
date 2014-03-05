/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  render: function() {
    var listNodes = this.props.products.map(function (product, index) {
      var classForItem = function() {
        var i = index + 1
        return i % 4 == 0 ? "products-item last" : "products-item"
      }

      return (
        <li className={ classForItem() }>
          <div className="products-picture-container">
            <img className="products-picture" src={ product.get('src') } alt={ product.get('name') } />
          </div>
          <div className="products-item-details">
            <dl>
              <dt>Price (in karma points)</dt>
              <dd><span className="products-price">{ product.get('price') }</span></dd>
              <dt>Name</dt>
              <dd>{ product.get('name') }</dd>
            </dl>
          </div>
        </li>
      )
    }, this)

    return(
      <section>
        <h2>Available products</h2>
        <p className="buffer-bottom secondary-nav">
          <a className="btn btn-action" href="/products/new">Add new product</a>
        </p>
        <ul className="plain">
          { listNodes }
        </ul>
      </section>
    )
  }
})