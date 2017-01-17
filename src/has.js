import toHeaderId from './to-header-id.js';

export default function(collection, str, strict) {
  let searchHeaderId = toHeaderId(str);
  for (const [headerId, headerName, headerValues] of collection) {
    if (headerId === searchHeaderId) {
      return true === strict ? headerValues.length > 0 : true;
    }
  }
  return false;
}
