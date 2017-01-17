
export default function(collection, flatten, strict) {
  if (void 0 === flatten) flatten = true;
  if (void 0 === strict) strict = true;
  let obj = {};
  for (const [headerId, headerName, headerValues] of collection) {
    let isEmpty = headerValues.length === 0;
    if (!isEmpty || true !== strict) {
      let value;
      if (isEmpty) {
        value = flatten ? null : [];
      }
      else {
        value = flatten ? headerValues[headerValues.length - 1] : Array.prototype.slice.call(headerValues);
      }
      obj[headerName] = value;
    }
  }
  return obj;
}
