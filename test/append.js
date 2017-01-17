'use strict';

describe('#append', function() {
  it('should append headers', function() {
    var collection = [];
    HttpHeaders.append(collection, 'Content-Type', '');
    expect(collection.length).toEqual(1);
    HttpHeaders.append(collection, 'date', '');
    expect(collection.length).toEqual(2);
  });

  it('should be case insensitive', function() {
    var collection = [];
    HttpHeaders.append(collection, 'Content-Type', '');
    expect(collection.length).toEqual(1);
    expect(collection[0][2].length).toEqual(1);
    HttpHeaders.append(collection, 'content-type', '');
    expect(collection.length).toEqual(1);
    expect(collection[0][2].length).toEqual(2);
  });

  it('should keep case of first seen header name', function() {
    var collection = [];
    HttpHeaders.append(collection, 'Content-Type', '');
    HttpHeaders.append(collection, 'content-type', '');
    expect(collection[0][0]).toEqual('content-type');
    expect(collection[0][1]).toEqual('Content-Type');
    HttpHeaders.append(collection, 'date', '');
    HttpHeaders.append(collection, 'Date', '');
    expect(collection[1][0]).toEqual('date');
    expect(collection[1][1]).toEqual('date');
  });

  it('should append values', function() {
    var collection = [];
    HttpHeaders.append(collection, 'Content-Type', 'a');
    HttpHeaders.append(collection, 'content-type', 'b');
    HttpHeaders.append(collection, 'content-type', 'c');
    expect(collection[0][2]).toEqual([ 'a', 'b', 'c' ]);
  });
});
