/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
    render: function() {
        var classForListItem = function(index) {
            return index % 4 == 0 ? "treasure last" : "treasure"
        }

        var listNodes = this.props.treasures.map(function (treasure, index) {
            return (
                <li className={ classForListItem(index) }>
                  <img className="treasure-picture" src={ treasure.get('src') } alt={ treasure.get('name') } />
                  <small className="attribution">
                    <a href={ treasure.get('attributionUrl') }>
                      { treasure.get('attributionText') }
                    </a>
                  </small>
                </li>
            )
        })

        return(
            <section className="treasures">
              <h2 className="treasure-owner">{ this.props.customer.get('name') }</h2>
              <ul className="plain">
                { listNodes }
              </ul>
            </section>
        )
    }
})