# 📦 object-dot

[![CircleCI](https://circleci.com/gh/jusx/object-dot.svg?style=svg)](https://circleci.com/gh/jusx/object-dot) [![codecov](https://codecov.io/gh/jusx/object-dot/branch/master/graph/badge.svg)](https://codecov.io/gh/jusx/object-dot) [![npm](https://img.shields.io/npm/v/object-dot.svg?style=flat-square)](https://www.npmjs.com/package/object-dot)

Easily use dot notation to `get`, or `set` a property of a nested object. A node module.

# Usage

## `set`

Create the nested chain of objects with `set` and dot notation with one simple statement.

```js
const objectd = require('object-dot')

console.log(
  objectd.set({ object: {}, path: 'a.b.c', value: 'foo' })
)
// => { a: { b: { c: 'foo' } } }

// Array of the property chain will work too!
console.log(
  objectd.set({ object: {}, path: ['a', 'b', 'c'], value: 'foo' })
)

// Alternatively you may use arguments as parameters instead of an object.
console.log(
  objectd.set({}, 'a.b.c', 'foo')
)
```

## `get`

Get the value of a nested chain of objects without checking each object in the chain for its existence.

```js
const objectd = require('object-dot')

// when one of the properties in the chain is undefined. Safely return undefined.
let object = { foo: { bar: 'you!' }}
console.log(
  objectd.get({ object, path: 'foo.bar.c.d'})
)
//=> undefined

// return a default value if property is undefined
object = { foo: { bar: 'you!' }}
console.log(
  objectd.get({ object, path: 'foo.bar.c.d', value: 'my default value'})
)
//=> 'my default value'

// When the property exist.
object = { a: { foo: { bar: 'you!' } }}
console.log(
  objectd.get({ object, path: 'a.foo'})
)
//=> { bar: 'you!' }

// Plain arguments as parameters will work too!
console.log(
  objectd.get(object, 'a.foo.bar')
)
// => 'you!'

// Using arrays instead of dot notation is also supported.
console.log(
  objectd.get(object, ['a', 'foo', 'bar'])
)
// => 'you!'

```

## `exists`

The `exists` method determines if a chained object exist.

```js
const objectd = require('object-dot')

// when one of the properties in the chain is undefined. Safely return undefined.
let object = { foo: { bar: 'you!' }}
console.log(
  objectd.exists({ object, path: 'foo.bar'})
)
//=> true

// alternatively using plain old arguments work too.
console.log(
  objectd.exists(object, 'foo.bar')
)

```

## `extend`

Use the `extend` method to add the methods, `get`, `set` and `exists` to the Object prototype chain:

```js
require('object-dot').extend()

let object = { foo: { bar: 'you!' }}
console.log(
  Object.exists(object, 'foo.bar')
)
//=> true
```
# Install

```bash
$ npm install object-dot --save
```

# License

ISC
