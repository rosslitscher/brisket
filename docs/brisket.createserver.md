Brisket.createServer
==================
Use Brisket.createServer to create a Brisket express engine that you can use in your express servers.

## Documentation Index

* [Required Configuration Options](#required-configuration-options)
* [Optional Configuration Options](#optional-configuration-options)

## Required Configuration Options
`createServer` takes parameters so that you can customize your app. Here are the required options:

#### apiHost
This is the fully qualified path to the api your Brisket app will hit. This value will be prepended to all model and collection urls during server-side requests.

## Optional Configuration Options

#### ServerApp
Use this setting to tell your Brisket server which ServerApp to use:

```js
var App = Brisket.App;

App.addServerInitializer(function(options) {
    var environmentConfig = options.environmentConfig;
});

var brisketServer = Brisket.createServer({
    apiHost: 'http://localhost:4000'
});
```

If you do not pass in a ServerApp, Brisket.ServerApp will be used.

#### environmentConfig
`environmentConfig` is a hash of key/values that will be available to both your ClientApp and ServerApp via the start method. In both Apps, `environmentConfig` will be available as `options.environmentConfig`:

```js
var App = Brisket.App;

App.addServerInitializer(function(options) {
    var environmentConfig = options.environmentConfig;
});

var brisketServer = Brisket.createServer({
    apiHost: 'http://localhost:4000',

    environmentConfig: {
        some: 'data',
    }
});
```

#### environmentConfig.appRoot
This is the root of your application as far as pushState is concerned. If you deploy your application somewhere other than the root of your server, use this setting to tell Brisket where it is. This will be passed to [Backbone.start](http://backbonejs.org/#History-start)

```js
var brisketServer = Brisket.createServer({
    apiHost: 'http://localhost:4000',

    environmentConfig: {
        appRoot: '/path/to/app/'
    }
});
```

#### serverConfig
`serverConfig` is a hash of key/values that will **ONLY** be available to your ServerApp via the start method. In the ServerApp, `serverConfig` will be available as `options.serverConfig`:

```js
var App = Brisket.App;

App.addServerInitializer(function(options) {
    var environmentConfig = options.environmentConfig;
});

var brisketServer = Brisket.createServer({
    apiHost: 'http://localhost:4000',
    serverConfig: { some: 'data' }
});

App.addClientInitializer(function(options) {
    console.log(options.serverConfig); // undefined
});
```

`serverConfig` is a good place to put any values that your end-users should not see but are necessary to run the server.

#### debug
Set `debug` to true to enable instrumentation with [Backbone Debugger](https://chrome.google.com/webstore/detail/backbone-debugger/bhljhndlimiafopmmhjlgfpnnchjjbhd?hl=en):

```
var brisketServer = Brisket.createServer({
    apiHost: 'http://localhost:4000',
    clientAppRequirePath: 'app/ClientApp',
    debug: true
});
```

Once you install the extension and set `debug` true, you can [use the debugger in your inspector](https://github.com/Maluen/Backbone-Debugger#screenshots)
