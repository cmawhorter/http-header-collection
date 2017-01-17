'use strict';

describe('#find', function() {
  it('should return header values for existing header', function() {
    var collection = createMockCollection();
    expect(HttpHeaders.find(collection, 'Content-Type').length).toEqual(1);
    expect(HttpHeaders.find(collection, 'content-type').length).toEqual(1);
    expect(HttpHeaders.find(collection, 'x-value').length).toEqual(3);
  });

  it('should return null for non-existant header', function() {
    var collection = createMockCollection();
    expect(HttpHeaders.find(collection, 'no-exists')).toEqual(null);
  });

  it('should trim search string', function() {
    var collection = createMockCollection();
    expect(HttpHeaders.find(collection, '   content-type   ').length).toEqual(1);
    expect(HttpHeaders.find(collection, '   Content-Type   ').length).toEqual(1);
  });
});
