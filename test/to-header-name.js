'use strict';

describe('#toHeaderName', function() {
  it('should normalize a header name', function() {
    expect(HttpHeaders.toHeaderName('Content-Type')).toEqual('Content-Type');
    expect(HttpHeaders.toHeaderName('content-type')).toEqual('content-type');
    expect(HttpHeaders.toHeaderName('    content-type        ')).toEqual('content-type');
    expect(HttpHeaders.toHeaderName('    Content-Type        ')).toEqual('Content-Type');
  });
});
