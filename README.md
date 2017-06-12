# http-header-collection [![Build Status](https://travis-ci.org/cmawhorter/http-header-collection.svg?branch=master)](http://travis-ci.org/cmawhorter/http-header-collection)

A collection of utility functions with no dependencies that help when working with a collection of http headers.

## Getting started

Look at `./tests/*` or the example below.

## Example class 

This example is used in [apigateway-http-request](https://github.com/cmawhorter/apigateway-http-request/blob/ea9eb6620a43095fb0cb76073b8ab1d83a9c5ae7/src/lib/http-headers.js) to process incoming HTTP headers in AWS' non-RFC compliant methodology i.e. no dupe header names allowed.

You can use this example to create your own implementation or use the utility functions directly.


```js
import { remove, replace, toHash, fromHash, find } from 'http-header-collection';

export default class HttpHeaders {
  constructor(arrOrHash) {
    this._collection = [];
    this.import(arrOrHash);
  }

  import(arrOrHash) {
    if (Array.isArray(arrOrHash)) {
      this._collection = arrOrHash;
    }
    else if (null !== arrOrHash && undefined !== arrOrHash) {
      this._collection = fromHash(arrOrHash, true);
    }
  }

  get(headerName) {
    let headerValues = find(this._collection, headerName);
    return null === headerValues ? undefined : headerValues[0];
  }

  add(headerName, headerValue) {
    // apigateway doesn't support dupe header names (multiple values)
    replace(this._collection, headerName, [headerValue]);
  }

  remove(headerName) {
    remove(this._collection, headerName);
  }

  toRawHeaders() {
    let rawHeaders = [];
    for (let [headerId, headerName, headerValues] of this._collection) {
      let headerValue = headerValues[0];
      if (headerValue && null !== headerValue) {
        rawHeaders.push(`${headerName}: ${headerValue}`);
      }
    }
    return rawHeaders;
  }

  toJSON() {
    let flattenHeaderValues       = true;
    let strictHeaderValueRequired = true;
    return toHash(this._collection, flattenHeaderValues, strictHeaderValueRequired);
  }

  toString() {
    return this.toRawHeaders().join('\n');
  }

  // array methods

  _nativeArrayMethod(method, args) {
    return this._collection[method].apply(this._collection, args);
  }

  get length() {
    return this._collection.length;
  }

  forEach()   { return this._nativeArrayMethod('forEach', arguments); }
  every()     { return this._nativeArrayMethod('every', arguments); }
  filter()    { return this._nativeArrayMethod('filter', arguments); }
  find()      { return this._nativeArrayMethod('find', arguments); }
  includes()  { return this._nativeArrayMethod('includes', arguments); }
  map()       { return this._nativeArrayMethod('map', arguments); }
  some()      { return this._nativeArrayMethod('some', arguments); }
}

```
