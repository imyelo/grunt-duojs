/*
 * grunt-duojs
 * https://github.com/imyelo/grunt-duojs
 *
 * Copyright (c) 2014 yelo
 * Licensed under the MIT license.
 */

'use strict';

var Duo = require('duo');
var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('duojs', 'compile duojs', function() {
    var options = this.options({
      root: process.cwd(),
      entry: './index.js',
      standalone: '',
      development: false,
      cache: true,
      copy: false,
      global: '',
      concurrency: 50,
      installTo: './components',
      buildTo: './build',
      custom: function () {}
    });
    var done = this.async();

    (function compile () {
      var duo = new Duo(options.root)
        .entry(options.entry)
        .standalone(options.standalone)
        .development(options.development)
        .cache(options.cache)
        .copy(options.copy)
        .global(options.global)
        .concurrency(options.concurrency)
        .installTo(options.installTo)
        .buildTo(options.buildTo);
      options.custom(duo);
      duo.write(function (err) {
        if (err) {
          grunt.log.error('Got an unexpected exception ' +
            'from the duojs compiler. ' +
            'The original exception was: ' +
            err);
          grunt.fail.warn('Duojs failed to compile.');
          return done(err);
        }
        done();
      });
    })();


  });

};
