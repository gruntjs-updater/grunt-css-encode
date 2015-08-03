'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.css_encode = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/default_options');

    test.equal(actual, expected, 'all file-uris have been converted to data-uris');

    test.done();
  },
  exclude_files: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/exclude_files');
    var expected = grunt.file.read('test/expected/exclude_files');
    test.equal(actual, expected, 'some file-uris have been excluded from being converted to data-uris');

    test.done();
  },
};
