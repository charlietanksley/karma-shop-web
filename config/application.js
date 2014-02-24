/* Exports a function which returns an object that overrides the default &
 *   plugin grunt configuration object.
 *
 * You can familiarize yourself with Lineman's defaults by checking out:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/application.coffee
 *   - https://github.com/linemanjs/lineman/blob/master/config/plugins
 *
 * You can also ask Lineman's about config from the command line:
 *
 *   $ lineman config #=> to print the entire config
 *   $ lineman config concat.js #=> to see the JS config for the concat task.
 */
module.exports = function(lineman) {
  //Override application configuration here. Common examples follow in the comments.
  return {
    browserify: {
      app_js: {
        files: {
          "generated/js/app.js" : "app/js/app.js"
        }
      }

      , options: {
        debug: true
      , exclude: ['underscore', 'jquery']
      , transform:  [ require('grunt-react').browserify, 'debowerify' ]
      }
    }

  , enableSass: true

  , enableAssetFingerprint: true

  , jshint: {
    options: {
      "asi": true
    , "laxcomma": true
    , "newcap": false
    }
  }

  , loadNpmTasks: ['grunt-browserify']

  , prependTasks: {
    common: ['browserify']
  }

  , removeTasks: {
    common: ["less", "handlebars", "coffee", "jst", "concat_sourcemap"]
  }

  , server: {
    // apiProxy: {
    //   enabled: true
    // , host: 'localhost'
    // , prefix: 'api'
    // , port: 3000
    // }
    pushState: true
  }

  , watch: {
    js: {
      files: [ "app/**/*.js", "app/templates/*.jsx" ],
      tasks: [ 'common' ]
    }
  }
  }
}