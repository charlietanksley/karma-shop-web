/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
    render: function() {
        var listNodes = this.props.products.map(function (product, index) {
            return (
                <li className="product">
                  <div className="product-visual">
                    <img className="product-picture" src={ product.get('src') } alt={ product.get('name') } />
                  </div>
                  <div className="product-details">
                    <dl>
                      <dt>Price (in karma points)</dt>
                      <dd><span className="product-price">{ product.get('price') }</span></dd>
                      <dt>Name</dt>
                      <dd>{ product.get('name') }</dd>
                      <dt>Quantity owned</dt>
                      <dd>{ product.get('unitsOwned') }</dd>
                    </dl>
                    <button className="buy-now">Buy Now!</button>
                  </div>
                </li>
            )
        })

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