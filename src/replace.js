import remove from './remove.js';
import append from './append.js';

export default function(collection, str, values) {
  remove(collection, str);
  values.forEach(value => append(collection, str, value));
}
