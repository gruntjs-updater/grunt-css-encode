/*
 * grunt-css-encode
 * https://github.com/benrhodesign/grunt-css-encode
 * A fork from Rafael Nowroteks' grunt-css-datauri
 *
 * Copyright (c) 2015 Ben Rhodes
 * Licensed under the MIT license.
 */

'use strict';

var parse = require('css-parse');
var stringify = require('css-stringify');
var datauri = require('datauri');
var minimatch = require("minimatch");

module.exports = function(grunt) {

  grunt.registerMultiTask('css_encode', 'convert file-uris to data-uris', function() {

    var options = this.options({
      // defaults
      exclude: []
    });

    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file ' + filepath + ' not found.');
          return false;
        } else {
          return true;
        }
      });

      if (src.length === 0) {
        grunt.log.warn('Destination ' + f.dest + ' not written because src files were empty.');
        return;
      }


      var css = grunt.file.read(f.src);

      var obj = parse(css);

      // Print parsed object as CSS string

      var rules = obj.stylesheet.rules;
      rules.forEach(function(r) {


        if (r.declarations) {
          r.declarations.forEach(function(d) {

            var value = d.value;

            var pattern = /url\s*\(['"]*([^\'")]+)['"]*\)/;

            var excludepattern = pattern + '(?!\\s*?\\/\\*\\s*?noembed\\s*?\\*\\/)';
            var match = excludepattern.exec(value);
            if (match) {


              var dir = src.toString().substring( 0, src.toString().lastIndexOf( "/" ) + 1);
              var file = match[1];
              var uri = dir + file;

              var include = true;
              if (options.exclude) {
                options.exclude.forEach(function(pattern) {
                  if (include && minimatch(file, pattern)) {
                    include = false;
                  }
                });
              }

              if (include) {
                var string = datauri(uri);
                if (string) {
                  d.value = value.replace(pattern, "url(" + string + ")");
                }
              }
            }

          });
        }

      });

      var output = stringify(obj);

      grunt.file.write(f.dest, output);

    });
  });

};