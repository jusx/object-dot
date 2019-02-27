# 📦 Object-Dotty

Easily use dot notation to `get`, or `set` a property of a nested object.

# Install

```bash
$ npm install object-dotty --save
```

# Usage

```js
const objectD = require('object-dotty')
console.log(
  objectD.set({ object: {}, path: 'foo.bar', value: 'you!' })
)
//=> { foo: { bar: 'you!' } }

let object = { foo: { bar: 'you!' }}
console.log(
  objectD.get({ object, path: 'foo.bar'})
)
//=> you!

let object = { foo: { bar: 'you!' }}
console.log(
  objectD.get({ object, path: 'foo'})
)
//=> { bar: 'you!' }
```

# License

ISC
