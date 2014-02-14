# Karma Shop

The web frontend for a store where you can convert your chatroom karma
into something of real value.

## Contributing

To run the app in development, you need to do the following:

```sh
# inside the karma-shop repo
$ gem install sass # for scss
$ npm install -g lineman
$ npm install -g bower
$ npm install
$ bower install
```

Alternatively, you can run

```sh
$ bin/bootstrap
```

Now that all this in installed, you can run

```sh
$ lineman run
```

This will start the app on `localhost:8000`.


## Caveats

Stuff is broken!  In particular, you need to add

```json
  "main": "dist/jbone.js"
````

to both `bower_components/jbone/bower.json` and `bower_components/jbone/.bower.json`.

And you need to comment out lines 18 and 19 of `node_modules/exoskeleton/exoskeleton.js`.

Ug.
