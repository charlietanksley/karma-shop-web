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

  , processImage: function(event) {
    var ctx = document.getElementById('canvas').getContext('2d')
    , img = new Image
    img.src = URL.createObjectURL(event.target.files[0])
    img.onload = function() {
      ctx.drawImage(img, 20,20)
    }

    var canvas = document.getElementById('canvas')
    var data = canvas.toDataURL()
    this.setState({src: data})
  }

  , render: function() {
    return(
      <section className="product">
      <form>
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
        <input type="file" name="img" id="img" onChange={ this.processImage } />
        <canvas width="400" height="300" id="canvas"/>
        <div className="actions">
          <button type="submit" className="submit" onClick={ this.handleSubmit } >Submit it!</button>
        </div>
      </form>
      </section>
    )
  }
})