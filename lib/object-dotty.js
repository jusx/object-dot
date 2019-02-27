
function set({ object, path, value, separator= '.' }) {
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

function get({ object, path }) {
  try {
    return eval(`object.${path}`)
  } catch (e) {
    return undefined
  }
}

module.exports = { set, get }
