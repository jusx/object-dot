
function set ({ object, path, value, separator = '.' }) {
  let properties = (Array.isArray(path)) ? path : path.split(separator)
  if (properties.length === 1) {
    object[path] = value
  } else {
    // let curretProperty = properties[0]
    let [currentProperty, ...remainingProperties] = properties
    object[currentProperty] = {}
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
