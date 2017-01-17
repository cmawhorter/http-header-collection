'use strict';

describe('#fromHash', function() {
  it('should convert a key/string hash into a header collection', function() {
    var obj = {
      'Content-Type': 'application/json',
      'date': 'blah',
    };
    var collection = HttpHeaders.fromHash(obj, true);
    expect(collection.length).toEqual(2);
    expect(collection[0][0]).toEqual('content-type');
    expect(collection[0][1]).toEqual('Content-Type');
    expect(collection[0][2].length).toEqual(1);
    expect(collection[1][0]).toEqual('date');
    expect(collection[1][1]).toEqual('date');
    expect(collection[1][2].length).toEqual(1);
  });

  it('should convert a key/array hash into a header collection', function() {
    var obj = {
      'Content-Type': 'application/json',
      'date': 'blah',
    };
    var collection = HttpHeaders.fromHash(obj, false);
    expect(collection.length).toEqual(2);
    expect(collection[0][0]).toEqual('content-type');
    expect(collection[0][1]).toEqual('Content-Type');
    expect(collection[0][2].length).toEqual(1);
    expect(collection[1][0]).toEqual('date');
    expect(collection[1][1]).toEqual('date');
    expect(collection[1][2].length).toEqual(1);
  });

  it('should default to flat', function() {
    var obj = { 'Content-Type': 'application/json' };
    var collection = HttpHeaders.fromHash(obj);
    expect(collection.length).toEqual(1);
    expect(collection[0][0]).toEqual('content-type');
    expect(collection[0][1]).toEqual('Content-Type');
    expect(collection[0][2].length).toEqual(1);
    expect(collection[0][2][0]).toEqual(obj['Content-Type']);
  });

  it('should handle hash with mixed values', function() {
    var obj1 = { 'single': 'one', 'array': [ 'one', 'two' ] };
    expect(HttpHeaders.fromHash(obj1, true)).toEqual([
      [ 'single', 'single', [ 'one' ] ],
      [ 'array', 'array', [ 'one,two' ] ],
    ]);
    var obj2 = { 'single': 'one', 'array': [ 'one', 'two' ] };
    expect(HttpHeaders.fromHash(obj2, false)).toEqual([
      [ 'single', 'single', [ 'one' ] ],
      [ 'array', 'array', [ 'one', 'two' ] ],
    ]);
  });
});
