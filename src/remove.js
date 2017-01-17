import find from './find.js';

export default function(collection, str) {
  let existingHeader = find(collection, str);
  if (existingHeader) {
    existingHeader.length = 0;
  }
}
