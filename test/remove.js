'use strict';

describe('#remove', function() {
  it('should remove header values', function() {
    var collection = createMockCollection();
    expect(collection[0][2].length).toEqual(3); // sanity
    HttpHeaders.remove(collection, 'X-Value');
    expect(collection[0][2].length).toEqual(0);
  });

  it('should not throw if header does not exist', function() {
    var collection = createMockCollection();
    assert.doesNotThrow(function() {
      HttpHeaders.remove(collection, 'no-exist');
    });
  });

  it('should not modify collection if header does not exist', function() {
    var collection = createMockCollection();
    HttpHeaders.remove(collection, 'no-exist');
    expect(collection).toEqual(createMockCollection());
  });
});
