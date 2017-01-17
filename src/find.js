import toHeaderId from './to-header-id.js';

export default function(collection, str) {
  let searchHeaderId = toHeaderId(str);
  for (const [headerId, headerName, headerValues] of collection) {
    if (headerId === searchHeaderId) {
      return headerValues;
    }
  }
  return null;
}
