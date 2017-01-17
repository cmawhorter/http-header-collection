'use strict';

describe('#toHeaderId', function() {
  it('should make a header name suitable for identification', function() {
    expect(HttpHeaders.toHeaderId('Content-Type')).toEqual('content-type');
    expect(HttpHeaders.toHeaderId('content-type')).toEqual('content-type');
    expect(HttpHeaders.toHeaderId('    content-type        ')).toEqual('content-type');
  });
});
