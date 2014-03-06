/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  componentDidMount: function() {
    this.state.filteredCustomers.on('change', function() {
      this.forceUpdate()
    }.bind(this))
  }

  , getInitialState: function() {
    return {
      searchTerm: ''
      , filteredCustomers: this.props.potentialCustomers
    }
  }

  , handleChange: function(e) {
    var searchTerm = event.target.value
    ,  fn = require('../js/fn')
    , matches

    matches = fn.filter(this.props.potentialCustomers, function(item) {
      var regex = new RegExp(searchTerm, 'i')
      if (regex.test(item.get('name'))) {
        return item
      }
    })

    this.setState({ filteredCustomers: matches
      , searchTerm: searchTerm })
  }

  , resetState: function() {
    this.setState({ filteredCustomers: this.props.potentialCustomers
      , searchTerm: '' })
  }

  , startSearch: function() {
    this.toggleSearchResultVisibility()
  }

  , stopSearch: function(e) {
    this.resetState()
    this.toggleSearchResultVisibility()
  }

  , toggleSearchResultVisibility: function() {
    var results

    results = document.getElementsByClassName('search-results')[0]
    results.classList.toggle('hidden')
  }

  , render: function() {
    var SearchListing = require('./search-listing.jsx')

    if (this.state.filteredCustomers === undefined) {
      this.state.filteredCustomers = this.props.potentialCustomers
    }

    return(
      <ul className="main-nav-list">
        <li className="main-nav-item"><a className="btn btn-nav" href='/products'>All products</a></li>
        <li className="main-nav-item"><a className="btn btn-nav" href='/products/new'>New product</a></li>
        <input type='text' className="main-nav-search" placeholder="look up a customer" onChange={ this.handleChange } onFocus={ this.startSearch } value={ this.state.searchTerm }/>
        <div className="search-results hidden">
          <SearchListing collection={ this.state.filteredCustomers } closeSearch={ this.stopSearch }></SearchListing>
        </div>
      </ul>
    )
  }
})
