/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  getInitialState: function() {
    return {attributionText: ''
      , attributionUrl: ''
      , name: ''
      , price: ''
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
    var ImageUploader = require('../js/lib/image-uploader')
    , canvas = document.getElementById('canvas')
    , data
    , uploader
    , fn = require('../js/fn')
    , url = URL.createObjectURL(event.target.files[0])

    var setSrcState = fn.bind(this, function() {
      this.setState({src: uploader.imageUrl()})
    })

    uploader = new ImageUploader(canvas, event)
    uploader.upload(url)
    .then(fn.bind(uploader, uploader.draw))
    .then(setSrcState)
  }

  , render: function() {
    return(
      <section className="new-product">
        <h2 className="centered">Create a new product</h2>
        <form>
          <fieldset className="new-product-image-upload">
            <legend>File upload</legend>
            <input type="file" name="img" id="img" onChange={ this.processImage } />
            <canvas id="canvas"/>
          </fieldset>

          <fieldset className="new-product-data">
            <legend>Product data</legend>

            <fieldset className="new-product-attribution">
              <input type="text" name="attributionText" placeholder="attribution text for image" value={ this.state.attributionText } onChange={ this.handleChange } />
              <input type="text" name="attributionUrl" placeholder="attribution url for image" value={ this.state.attributionUrl } onChange={ this.handleChange } />
            </fieldset>

            <fieldset className="new-product-details">
              <input type="text" name="name" placeholder="name of product" value={ this.state.name } onChange={ this.handleChange } />
              <input type="text" name="price" placeholder="price of product (whole numbers only)" value={ this.state.price } onChange={ this.handleChange } />
            </fieldset>

            <fieldset className="new-product-actions">
              <button type="submit" className="new-product-submit" rel="create-product" onClick={ this.handleSubmit } >Create product</button>
            </fieldset>
          </fieldset>
        </form>
      </section>
    )
  }
})