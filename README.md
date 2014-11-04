#grunt-duojs

> compile duojs

[![NPM version](https://badge.fury.io/js/grunt-duojs.png)](http://badge.fury.io/js/grunt-duojs)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-duojs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-duojs');
```

## The "duojs" task

### Overview
In your project's Gruntfile, add a section named `duojs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  duojs: {
    simple: {
      options: {
        src: './src/app.js'
      }
    },
  },
});
```

### Options

#### options.entry  
Type: `string`  
Default value: `./index.js`  

#### options.custom  
Type: `function`  
Default value: `noop`  

#### options.[...]
options.[root, standalone, development, cache, copy, golbal, concurrency, installTo, buildTo] is same to [Duo Javascript API](https://github.com/duojs/duo/blob/master/docs/api.md)


### Usage Examples  

#### Default Options  
In this example, the `duojs` task will wait for the server start with the least options.  

```js
grunt.initConfig({
  duojs: {
    simple: {
      options: {
        entry: './src/app.js'
      }
    }
  }
});
```

#### Custom Options  

```js
grunt.initConfig({
  duojs: {
    app: {
      options: {
        root: process.cwd(),
        entry: './src',
        standalone: '',
        development: false,
        cache: true,
        copy: false,
        global: '',
        concurrency: 50,
        installTo: './components',
        buildTo: './build',
        custom: function (duo) {
            duo.include('jade-runtime', ...);
        }
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/imyelo/grunt-duojs/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

