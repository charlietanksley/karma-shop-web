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

    // API Proxying
    //
    // During development, you'll likely want to make XHR (AJAX) requests to an API on the same
    // port as your lineman development server. By enabling the API proxy and setting the port, all
    // requests for paths that don't match a static asset in ./generated will be forwarded to
    // whatever service might be running on the specified port.
    //
    // server: {
    //   apiProxy: {
    //     enabled: true,
    //     host: 'localhost',
    //     port: 3000
    //   }
    // }

    browserify: {
      options: {
        transform:  [ require('grunt-react').browserify, 'debowerify' ]
      }
    }

  , jshint: {
    options: {
      "asi": true
    , "laxcomma": true
    , "newcap": false
    }
  }

  , enableSass: true

  , enableAssetFingerprint: true

  , removeTasks: {
    common: ["less", "handlebars", "coffee", "jst", "concat_sourcemap"]
  , dist: ["uglify"]
  }
  }

  , watch: {
    js: {
      files: [ "app/**/*.js", "app/views/*.jsx" ],
      tasks: [ 'common' ]
    }
  }
  }
}