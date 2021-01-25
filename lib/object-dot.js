
function set ({ object, path, value, overwrite = true, separator = '.' }) {
  // support arguments as parameter instead of object.
  if (arguments.length > 1) [ object, path, value, overwrite = true, separator = '.' ] = arguments

  let properties = (Array.isArray(path)) ? path : path.split(separator)
  if (properties.length === 1) {
    if (object) object[path] = value
  } else {
    let [currentProperty, ...remainingProperties] = properties
    if (object[currentProperty] === undefined) object[currentProperty] = {}
    else if (overwrite && typeof object[currentProperty] !== 'object') object[currentProperty] = {}
    else if (isPrototypePolluted(currentProperty)) return
    set({ object: object[currentProperty], path: remainingProperties, value, overwrite, separator })
  }
  return object
}

function get ({ object, path, value }) {
  if (arguments.length > 1) [ object, path, value ] = arguments

  // we create a new instance of the array because we are shifting and
  // removing elements in the while loop. This is to prevent mutation.
  let properties = (Array.isArray(path)) ? Array.from(path) : path.split('.')
  while (properties.length && object) {
    object = object[properties.shift()]
  }
  return (value === undefined) ? object : value
}

function exists ({ object, path }) {
  if (arguments.length > 1) [ object, path ] = arguments

  let properties = (Array.isArray(path)) ? Array.from(path) : path.split('.')
  while (properties.length) {
    object = object[properties.shift()]
    if (object === undefined) return false
  }

  return true
}

function extend () {
  /* eslint-disable */
  Object.prototype.get = get
  Object.prototype.set = set
  Object.prototype.exists = exists
  /* eslint-enable */
}

function isPrototypePolluted (key) {
  return ['__proto__', 'constructor', 'prototype'].includes(key)
}

module.exports = { set, get, exists, extend }
