import toHeaderName from './to-header-name.js'

export default function(str) {
  return toHeaderName(str).toLowerCase();
}
