require('source-map-support').install();

global.assert = require('assert');
global.expect = require('expect');
global.HttpHeaders = require('../../dist/http-header-collection.umd.js');

global.createMockCollection = function() {
  return [
    [ 'x-value',          'X-Value',          [ 'one', 'two', 'three' ] ],
    [ 'content-type',     'Content-Type',     [ 'application/json' ] ],
    [ 'date',             'date',             [ 'Mon, 16 Jan 2017 23:46:41 GMT' ] ],
    [ 'x-empty',          'X-Empty',          [] ],
  ];
};

// creates hash version of the standard mock collection
global.createMockHash = function(flat) {
  if (flat) {
    return {
      'X-Value': 'three',
      'Content-Type': 'application/json',
      'date': 'Mon, 16 Jan 2017 23:46:41 GMT',
      'X-Empty': null,
    };
  }
  else {
    return {
      'X-Value': [ 'one', 'two', 'three' ],
      'Content-Type': [ 'application/json' ],
      'date': [ 'Mon, 16 Jan 2017 23:46:41 GMT' ],
      'X-Empty': [],
    };
  }
};
