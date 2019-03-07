
function set ({ object, path, value, separator = '.' }) {
  // support arguments as parameter instead of object.
  if (arguments.length > 1) [ object, path, value, separator = '.' ] = arguments

  let properties = (Array.isArray(path)) ? path : path.split(separator)
  if (properties.length === 1) {
    object[path] = value
  } else {
    let [currentProperty, ...remainingProperties] = properties
    if (!object[currentProperty]) object[currentProperty] = {}
    set({ object: object[currentProperty], path: remainingProperties, value, separator })
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

module.exports = { set, get, exists, extend }
