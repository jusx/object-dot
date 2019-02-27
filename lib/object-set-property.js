/**
 * Set value on a nested object given the property path in dot notation.
 */
function objectSetProperty({ object, path, value, separator= '.' }) {
  let properties = path.split(separator)
  if (properties.length === 1) {
    object[path] = value
  } else {
    let curretProperty = properties[0]
    object[curretProperty] = {}
    properties.shift()
    objectSetProperty({ object: object[curretProperty], path: properties.join('.'), value, separator })
  }
  return object
}

module.exports = objectSetProperty
