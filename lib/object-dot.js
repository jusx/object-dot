
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
  let properties = path.split('.')
  while (properties.length && object) {
    object = object[properties.shift()]
  }
  return (value === undefined) ? object : value
}

module.exports = { set, get }
