/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  render: function() {
    var listNodes = this.props.potentialCustomers.map(function (potentialCustomer) {
      var name = potentialCustomer.get('name')
      , link = "/treasures/" + name

      return <li><a href={ link } >{ name }</a></li>
    })

    return(
      <ul className="plain">
      { listNodes }
      </ul>
    )
  }
})