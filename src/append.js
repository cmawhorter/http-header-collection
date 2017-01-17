import toHeaderId from './to-header-id.js';
import toHeaderName from './to-header-name.js';
import find from './find.js';

export default function(collection, str, value) {
  let existingHeader = find(collection, str);
  if (!existingHeader) {
    existingHeader = [];
    collection.push([ toHeaderId(str), toHeaderName(str), existingHeader ]);
  }
  // only string is allowed
  existingHeader.push('' + value);
}
