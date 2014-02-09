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

I know it is kind of a lot.  Sorry about that.  I'm still trying to
figure out a good, clean workflow for frontend apps.

Now that all this in installed, you can run

```sh
$ lineman run
```

This will start the app on `localhost:8000`.
