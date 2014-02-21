var Backbone = require('exoskeleton')

module.exports = Backbone.View.extend({
  el: '.about'

, template: '<div class="page-introduction"></div>'

, render: function(args) {
    var IntroTextView = require('../../templates/intro-text.jsx')
      , React = require('react')
      , data = { text: args.text }

    this.el.innerHTML = this.template
    var component = document.getElementsByClassName('page-introduction')[0]

    React.renderComponent(new IntroTextView(data), component)
    return this
  }
})