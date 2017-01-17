import replace from './replace.js';

export default function(collection) {
  for (const [headerId, headerName, headerValues] of collection) {
    if (headerValues.length) {
      let value = headerValues[headerValues.length - 1];
      replace(collection, headerName, [ value ]);
    }
  }
}
