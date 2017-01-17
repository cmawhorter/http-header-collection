'use strict';

describe('#replace', function() {
  it('should replace header values', function() {
    var collection = createMockCollection();
    expect(collection[0][2][0]).toEqual('one'); // sanity
    HttpHeaders.replace(collection, 'x-value', [ 'blah' ]);
    expect(collection[0][2][0]).toEqual('blah');
  });

  it('should do replacement in place without changing reference', function() {
    var collection = createMockCollection();
    var beforeValues = collection[0][2];
    HttpHeaders.replace(collection, 'Content-Type', [ 'text/html' ]);
    var afterValues = collection[0][2];
    assert.strictEqual(beforeValues, afterValues, 'header value reference changed');
  });
});
