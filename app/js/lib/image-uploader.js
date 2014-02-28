module.exports = function(canvas) {
  this._canvas = canvas

  this.upload = function(url) {
    var when = require('when')
      , file = this.file
      , deferred = when.defer()
      , image = new Image()

    image.src = url
    image.onload = function() {
      deferred.resolve(image)
    }

    image.onerror = function() {
      deferred.reject(new Error('Something whent wrong when trying to load image.'))
    }

    return deferred.promise
  }

  this.draw = function(image) {
    var canvas = this._canvas
      , context = canvas.getContext('2d')
    canvas.width = image.width
    canvas.height = image.height
    context.drawImage(image, 0, 0, image.width, image.height)

    return image
  }

  this.imageUrl = function() {
    return this._canvas.toDataURL()
  }
}