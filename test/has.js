'use strict';

describe('#has', function() {
  it('should return true for existing headers', function() {
    var collection = createMockCollection();
    expect(HttpHeaders.has(collection, 'date')).toEqual(true);
    expect(HttpHeaders.has(collection, 'DaTe')).toEqual(true);
  });

  it('should return false for missing headers', function() {
    var collection = createMockCollection();
    expect(HttpHeaders.has(collection, 'no-exist')).toEqual(false);
  });

  it('should return true for headers without values', function() {
    var collection = createMockCollection();
    expect(HttpHeaders.has(collection, 'x-empty')).toEqual(true);
  });

  it('should return false for headers without values if strict specified', function() {
    var collection = createMockCollection();
    expect(HttpHeaders.has(collection, 'x-empty', true)).toEqual(false);
  });
});
