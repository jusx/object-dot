# 📦 object-dot

Easily use dot notation to `get`, or `set` a property of a nested object.

# Install

```bash
$ npm install object-dot --save
```

# Usage

```js
const objectd = require('object-dotty')
console.log(
  objectd.set({ object: {}, path: 'foo.bar', value: 'you!' })
)
//=> { foo: { bar: 'you!' } }

let object = { foo: { bar: 'you!' }}
console.log(
  objectd.get({ object, path: 'foo.bar'})
)
//=> you!

let object = { foo: { bar: 'you!' }}
console.log(
  objectd.get({ object, path: 'foo'})
)
//=> { bar: 'you!' }
```

# License

ISC
