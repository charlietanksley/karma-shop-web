/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  render: function() {
    var classForListItem = function(index) {
      var i = index + 1
      return i % 4 == 0 ? "treasure last" : "treasure"
    }

    var listNodes = this.props.treasures.map(function (treasure, index) {
      return (
        <li className={ classForListItem(index) }>
          <img className="treasure-picture" src={ treasure.get('src') } alt={ treasure.get('name') } />
          <div className='treasure-attribution'>
            <small className="attribution">
              <a href={ treasure.get('attributionUrl') }>
                 { treasure.get('attributionText') }
              </a>
            </small>
          </div>
        </li>
      )
    })

    var shoppingLink = function(name) {
      return '/treasures/' + name + '/shop'
    }

    return(
      <section className="treasures">
        <h2 className="treasure-owner">{ this.props.customer.get('name') }</h2>
        <p className="buffer-bottom secondary-nav">
          <a className="btn btn-action" href={ shoppingLink(this.props.customer.get('name')) }>Go shopping</a>
        </p>

        <ul className="plain">
        { listNodes }
        </ul>
      </section>
    )
  }
})