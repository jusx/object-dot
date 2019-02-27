const objectSetProperty = require('../lib/object-set-property')

test('deep nested', ()=> {
  let object = {}
  objectSetProperty({ object, path: 'a.b.c.d.e.f.g.h.i.j.k', value: 'my value' })
  expect(object.a.b.c.d.e.f.g.h.i.j.k).toBe('my value')
})

test('medium nested', ()=> {
  let object = {}
  objectSetProperty({ object, path: 'a.b.c.d', value: 'my value' })
  expect(object.a.b.c.d).toBe('my value')
})

test('shallow nested', ()=> {
  let object = {}
  objectSetProperty({ object, path: 'a', value: 'my value' })
  expect(object.a).toBe('my value')
})
