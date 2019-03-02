# 📦 object-dot

[![CircleCI](https://circleci.com/gh/jusx/object-dot.svg?style=svg)](https://circleci.com/gh/jusx/object-dot) [![npm](https://img.shields.io/npm/v/object-dot.svg?style=flat-square)](https://www.npmjs.com/package/object-dot)

Easily use dot notation to `get`, or `set` a property of a nested object. A Node.js library.

# Usage

## `set`

Create the nested chain of objects with `set` and dot notation with one simple statement.

```js
const objectd = require('object-dot')
console.log(
  objectd.set({ object: {}, path: 'a.b.c', value: 'you!' })
)
//=> { a: { b: { c: 'you!' } } }
```

## `get`

Get the value of a nested chain of objects without checking each object in the chain for its existence.

```js
const objectd = require('object-dot')
let object = { foo: { bar: 'you!' }}
console.log(
  objectd.get({ object, path: 'foo.bar.c.d'})
)
//=> undefined

let object = { foo: { bar: 'you!' }}
console.log(
  objectd.get({ object, path: 'foo'})
)
//=> { bar: 'you!' }
```

# Install

```bash
$ npm install object-dot --save
```

# License

ISC
