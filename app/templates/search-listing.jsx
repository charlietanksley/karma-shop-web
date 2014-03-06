/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  close: function(e) {
    this.props.closeSearch()
  }

  , render: function() {
    var options = this.props.collection.map(function(potentialCustomer) {
      var name = potentialCustomer.get('name')
      , link = "/treasures/" + name

      return <li><a href={ link }>{ name }</a></li>
    }, this)

    return(
      <div>
      <span className='right close' onClick={ this.close }>X</span>
      <ul className='plain'>
        { options }
      </ul>
      </div>
    )
  }
})
