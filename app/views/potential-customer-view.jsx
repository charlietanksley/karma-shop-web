/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
    render: function() {
        var listNodes = this.props.potentialCustomers.map(function (potentialCustomer) {
            return <li>{ potentialCustomer }</li>
        })

        return(
            <ul className="plain">
            { listNodes }
            </ul>
        )
    }
})