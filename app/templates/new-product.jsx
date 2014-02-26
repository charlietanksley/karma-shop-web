/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  getInitialState: function() {
    return {attributionText: ''
      , attributionUrl: ''
      , name: ''
      , price: 0
      , src: '' }
  }

  , handleChange: function(event) {
    var name = event.target.name
    , data = {}

    data[name] = event.target.value
    this.setState(data)
  }

  , handleSubmit: function(event) {
    event.preventDefault()
    this.props.submit(this.state)
  }

  , render: function() {
    return(
      <section className="product">
      <form action>
        <div className="attribution-inputs">
          <label>Attribution label</label>
          <input type="text" name="attributionText" placeholder="attribution text" value={ this.state.attributionText } onChange={ this.handleChange } />
          <label>Attribution url (source of image)</label>
          <input type="text" name="attributionUrl" placeholder="attribution url" value={ this.state.attributionUrl } onChange={ this.handleChange } />
        </div>
        <div className="details-inputs">
          <label>Product name</label>
          <input type="text" name="name" placeholder="name" value={ this.state.name } onChange={ this.handleChange } />
          <label>Price</label>
          <input type="text" name="price" placeholder="price" value={ this.state.price } onChange={ this.handleChange } />
        </div>
        <input type="text" name="src" value={ this.state.src } onChange={ this.handleChange } />
        <div className="actions">
          <button type="submit" className="submit" onClick={ this.handleSubmit } >Submit it!</button>
        </div>
      </form>
      </section>
    )
  }
})