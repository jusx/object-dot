
function set ({ object, path, value, separator = '.' }) {
  let properties = path.split(separator)
  if (properties.length === 1) {
    object[path] = value
  } else {
    let curretProperty = properties[0]
    object[curretProperty] = {}
    properties.shift()
    set({ object: object[curretProperty], path: properties.join('.'), value, separator })
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
