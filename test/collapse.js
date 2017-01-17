'use strict';

describe('#collapse', function() {
  it('should reduce header values to one per name', function() {
    var collection = createMockCollection();
    expect(collection[0][2].length).toEqual(3); // mock sanity check
    HttpHeaders.collapse(collection);
    expect(collection[0][2].length).toEqual(1);
  });
});
