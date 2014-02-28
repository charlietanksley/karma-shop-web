var ViewRenderer

function ViewRenderer(args) {
  this.className = args.className
  this.reactTemplate = args.reactTemplate
  this.view = args.view
  this.element = args.element || 'div'
}

ViewRenderer.prototype.clearMainArea = function() {
  this.view.el.innerHTML = ''
}

ViewRenderer.prototype.render = function() {
  this.clearMainArea()
  var template = this.template()
  this.renderWithReact(template)
}

ViewRenderer.prototype.renderWithReact = function(template) {
  var React = require('react')
    , _template = template || this.template

  React.renderComponent(this.reactTemplate, _template)
}

ViewRenderer.prototype.template = function() {
  var element = document.createElement(this.element)
  element.className = this.className
  this.view.el.appendChild(element)

  return document.getElementsByClassName(this.className)[0]
}

exports.ViewRenderer = ViewRenderer