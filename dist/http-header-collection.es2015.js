var toHeaderName = function (str) {
  return (str || '').toString().trim();
};

var toHeaderId = function (str) {
  return toHeaderName(str).toLowerCase();
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var find = function (collection, str) {
  var searchHeaderId = toHeaderId(str);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = collection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = slicedToArray(_step.value, 3),
          headerId = _step$value[0],
          headerName = _step$value[1],
          headerValues = _step$value[2];

      if (headerId === searchHeaderId) {
        return headerValues;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
};

var append = function (collection, str, value) {
  var existingHeader = find(collection, str);
  if (!existingHeader) {
    existingHeader = [];
    collection.push([toHeaderId(str), toHeaderName(str), existingHeader]);
  }
  // only string is allowed
  existingHeader.push('' + value);
};

var remove = function (collection, str) {
  var existingHeader = find(collection, str);
  if (existingHeader) {
    existingHeader.length = 0;
  }
};

var replace = function (collection, str, values) {
  remove(collection, str);
  values.forEach(function (value) {
    return append(collection, str, value);
  });
};

var collapse = function (collection) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = collection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = slicedToArray(_step.value, 3),
          headerId = _step$value[0],
          headerName = _step$value[1],
          headerValues = _step$value[2];

      if (headerValues.length) {
        var value = headerValues[headerValues.length - 1];
        replace(collection, headerName, [value]);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var fromHash = function (obj, isFlat) {
  if (void 0 === isFlat) isFlat = true; // default to expecting flat
  obj = obj || {};
  var collection = [];
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    if (isFlat) {
      append(collection, key, value);
    } else {
      if (!Array.isArray(value)) {
        value = [value];
      }
      value.forEach(function (item) {
        return append(collection, key, item);
      });
    }
  });
  return collection;
};

var has = function (collection, str, strict) {
  var searchHeaderId = toHeaderId(str);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = collection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = slicedToArray(_step.value, 3),
          headerId = _step$value[0],
          headerName = _step$value[1],
          headerValues = _step$value[2];

      if (headerId === searchHeaderId) {
        return true === strict ? headerValues.length > 0 : true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
};

var toHash = function (collection, flatten, strict) {
  if (void 0 === flatten) flatten = true;
  if (void 0 === strict) strict = true;
  var obj = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = collection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = slicedToArray(_step.value, 3),
          headerId = _step$value[0],
          headerName = _step$value[1],
          headerValues = _step$value[2];

      var isEmpty = headerValues.length === 0;
      if (!isEmpty || true !== strict) {
        var value = void 0;
        if (isEmpty) {
          value = flatten ? null : [];
        } else {
          value = flatten ? headerValues[headerValues.length - 1] : Array.prototype.slice.call(headerValues);
        }
        obj[headerName] = value;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return obj;
};

export { append, collapse, find, fromHash, has, remove, replace, toHash, toHeaderId, toHeaderName };
//# sourceMappingURL=http-header-collection.es2015.js.map
