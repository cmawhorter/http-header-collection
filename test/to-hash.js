'use strict';

describe('#toHash', function() {
  it('should convert a collection into a key/string hash', function() {
    var collection = createMockCollection();
    var expectedHash = createMockHash(true);
    expect(HttpHeaders.toHash(collection, true, false)).toEqual(expectedHash);
  });

  it('should convert a collection into a key/array hash', function() {
    var collection = createMockCollection();
    var expectedHash = createMockHash(false);
    expect(HttpHeaders.toHash(collection, false, false)).toEqual(expectedHash);
  });

  it('should default to flattening hash and removing empty values', function() {
    var collection = createMockCollection();
    var expectedHash = createMockHash(true);
    delete expectedHash['X-Empty'];
    expect(expectedHash).toEqual({ // sanity
      'X-Value': 'three',
      'Content-Type': 'application/json',
      'date': 'Mon, 16 Jan 2017 23:46:41 GMT',
    });
    var hash = HttpHeaders.toHash(collection);
    expect(hash).toEqual(expectedHash);
  });

  it('should convert empty values to null when flat and not strict', function() {
    var collection = createMockCollection();
    var expectedHash = createMockHash(true);
    var hash = HttpHeaders.toHash(collection, true, false);
    expect(hash).toEqual(expectedHash);
    expect(hash['X-Empty']).toEqual(null); // sanity
  });

  it('should convert empty values to empty arrays when not flat and not strict', function() {
    var collection = createMockCollection();
    var expectedHash = createMockHash(false);
    var hash = HttpHeaders.toHash(collection, false, false);
    expect(hash).toEqual(expectedHash);
    expect(hash['X-Empty']).toEqual([]); // sanity
  });

  it('should exclude headers with no value in strict mode', function() {
    var collection = [ [ 'empty', 'empty', [] ] ];
    expect(HttpHeaders.toHash(collection, true, true)).toExcludeKey('empty');
    expect(HttpHeaders.toHash(collection, false, true)).toExcludeKey('empty');
  });

  it('should clone header values when returning key/array hash', function() {
    var collection = createMockCollection();
    var expectedHash = createMockHash(false);
    var hash = HttpHeaders.toHash(collection, false, false);
    expect(hash).toEqual(expectedHash);
    var beforeLength = hash['X-Value'].length;
    collection[0][2].push('some new value');
    expect(collection[0][2]).toInclude('some new value');
    expect(hash['X-Value']).toExclude('some new value');
    expect(beforeLength).toEqual(hash['X-Value'].length);
  });
});
