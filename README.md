Brisket
=====
[![Build Status](https://travis-ci.org/bloomberg/brisket.svg?branch=master)](https://travis-ci.org/bloomberg/brisket) [![Code Climate](https://codeclimate.com/github/bloomberg/brisket/badges/gpa.svg)](https://codeclimate.com/github/bloomberg/brisket)

For changes see the [Changelog](CHANGELOG.md)

## About Brisket
Brisket is a framework for building single page web apps using isomorphic JavaScript. A Brisket app is both a traditional web site AND a single page web application at the same time. Brisket provides the tools that you need to spend your time focusing on your application's logic rather than on "what environment is my code running in?".

## Getting Started
Using [generator-brisket](https://github.com/wawjr3d/generator-brisket) is the fastest way to get started.

Install [Yeoman](http://yeoman.io):

```bash
npm install -g yo
```

To install generator-brisket from npm, run:

```bash
npm install -g generator-brisket
```

To install grunt-cli from npm, run:

```bash
npm install -g grunt-cli
```

Create a directory for your app:

```bash
mkdir projectname
cd projectname
```

Finally, initiate the generator and run your app:

```bash
yo brisket && npm start
```

Your first brisket app will be available at http://localhost:8080

## Getting More Started
Now that you have a working app, check out our [Recipes](docs/recipes/README.md) for common use cases.

## Documentation

### Brisket Concepts And High Level Systems
* [**Application Links**](docs/brisket.applicationlinks.md): How to link from one route to another in a Brisket app.
* [**Brisket Router vs Backbone.Router**](docs/brisket.router.md): What makes a Brisket Router different from a regular Backbone.Router.
* [**Brisket Request Object**](docs/brisket.requestobject.md): The Brisket request object normalizes access to important data about the current request.
* [**Brisket Response Object**](docs/brisket.responseobject.md): The Brisket response object normalizes modifying the current response.
* [**Child Views**](docs/brisket.childviews.md): Brisket provides a system to help you manage a View's child views.
* [**Navigating with Brisket**](docs/brisket.navigating.md): Brisket provides methods to navigate the app in the browser.

### Brisket's Parts
* [**Brisket.App**](docs/brisket.app.md): Initialize your application with Brisket.App.
* [**Brisket.createServer**](docs/brisket.createserver.md): A function that returns an express engine that you can use in your application to run the server.
* [**Brisket.RouterBrewery**](docs/brisket.routerbrewery.md): Brews routers that know how to route on the server and the client. Allows you to make your own RouterBrewery.
* [**Brisket.Controller**](docs/brisket.controller.md): A helper object to move functionality off of the router (it doesn't provide any functionality; just semantics).
* [**Brisket.Model**](docs/brisket.model.md): Our version of a Backbone.Model that knows how to sync on the server and the client.
* [**Brisket.Collection**](docs/brisket.collection.md): Our version of a Backbone.Collection that knows how to sync on the server and the client.
* [**Brisket.Events**](docs/brisket.events.md): A proxy to Backbone.Events that exposes a noop on the server to avoid server-side memory leaks.
* [**Brisket.View**](docs/brisket.view.md): Our version of a Backbone.View that allows support for some of the core features - reattaching views, child view management, memory management, etc.
* [**Brisket.Layout**](docs/brisket.layout.md): A specialized View that handles meta tags, page title, etc.
* Brisket.Layout.Metatags: Use this class to make metatags for "pages".
* [**Brisket.Templating.TemplateAdapter**](docs/brisket.templating.templateadapter.md): Inherit from this to tell Brisket how to render templates.
* [**Brisket.Templating.StringTemplateAdapter**](docs/brisket.templating.stringtemplateadapter.md): The default template adapter. Set a View's template key to be a string template to get started.
* [**Brisket.ErrorViewMapping**](docs/brisket.errorviewmapping.md): Creates errorViewMappings for your routers (e.g. 404 should show Page Not Found).
* Brisket.version: The version of Brisket. On the client, the version can be accessed by `window.Brisket.version` after the ClientApp has started.
* [**Brisket.onError**](docs/brisket.onerror.md): Registers error callback.

## Using Brisket in your project

Install the Brisket into your project:

```bash
npm install brisket --save
```

## Bundling your Brisket application
Check the [Bundling With Browserify](/docs/recipes/bundling-with-browserify.md) Recipe!

## Compatibility and Requirements

Please refer to `package.json` for Brisket's dependencies

### Node.js and io.js Support

Brisket supports Node.js `>=0.10.0` and io.js `>=3.0.0`.

### Browser Support
Chrome, Firefox, Safari, iOS 6+, Android 4+, Internet Explorer 9+

For support in older versions of IE you can include your favorite shim libraries in the head of your layout. For example to support IE8 include the following in your head tag:

```headtag
<!--[if lt IE 9]>
    <script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/es5-shim/2.3.0/es5-shim.min.js'></script>
    <script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/es5-shim/2.3.0/es5-sham.min.js'></script>
<![endif]-->
```

To support IE7, include the snippet above AND the following:

```headtag
<!--[if lt IE 8]>
    <script type='text/javascript' src='http://cdnjs.cloudflare.com/ajax/libs/json3/3.3.1/json3.min.js'></script>
<![endif]-->
```

**Note:** In IEs < 10, the single page app functionality that Brisket provides will not work since pushState is not available. Brisket does not support hash tag SPA's. When the SPA functionality is disabled, Brisket will operate like a standard website i.e. clicking application links will cause a page reload.

## Development

Install dependencies:
```shell
$ npm install
```

To run the test suite:
```shell
$ npm test
```

To run benchmarks:
```shell
$ npm run benchmarks
```

## Troubleshoot

### `jsdom` error with Legacy Node.js and io.js

For Node.js 0.10.x, 0.11.x and 0.12.x, specify the version of [jsdom](https://github.com/tmpvar/jsdom) to be v3.x,

```bash
rm -rf ./node_modules/brisket/node_modules/jsdom
npm install jsdom@3 --save
```

For io.js, specify the version of [jsdom](https://github.com/tmpvar/jsdom) to be v6.x,

```bash
rm -rf ./node_modules/brisket/node_modules/jsdom
npm install jsdom@6 --save
```

## License
Apache License (Version 2). See license text in [LICENSE](LICENSE).

## Copyrights and Names
Brisket is copyrighted by [Bloomberg Finance LP](http://bloomberg.com). Brisket is a service mark of [Bloomberg LP](http://bloomberg.com).
