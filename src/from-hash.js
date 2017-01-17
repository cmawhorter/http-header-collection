import append from './append.js';

export default function(obj, isFlat) {
  if (void 0 === isFlat) isFlat = true; // default to expecting flat
  obj = obj || {};
  let collection = [];
  Object.keys(obj).forEach(key => {
    let value = obj[key];
    if (isFlat) {
      append(collection, key, value);
    }
    else {
      if (!Array.isArray(value)) {
        value = [ value ];
      }
      value.forEach(item => append(collection, key, item));
    }
  });
  return collection;
}
