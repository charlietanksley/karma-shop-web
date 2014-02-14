var jbone = function() {
  var jbone = require('jbone')
  jbone.ajax = require('reqwest').compat
  return jbone
}

module.exports = jbone()
