const odotty = require('object-dot')

describe('set', ()=> {
  test('deep nested', ()=> {
    let object = {}
    odotty.set({ object, path: 'a.b.c.d.e.f.g.h.i.j.k', value: 'my value' })
    expect(object.a.b.c.d.e.f.g.h.i.j.k).toBe('my value')
  })

  test('medium nested', ()=> {
    let object = {}
    odotty.set({ object, path: 'a.b.c.d', value: 'my value' })
    expect(object.a.b.c.d).toBe('my value')
  })

  test('shallow nested', ()=> {
    let object = {}
    odotty.set({ object, path: 'a', value: 'my value' })
    expect(object.a).toBe('my value')
  })
})

describe('get', () => {
  test('exists', ()=> {
    let object = { a: { b: { c: 'd' } } }
    expect(
      odotty.get({ object, path: 'a.b.c' })
    ).toBe('d')
  })

  test('exist in the middle ', ()=> {
    let object = { a: { b: { c: 'd' } } }
    expect(
      odotty.get({ object, path: 'a.b' })
    ).toEqual({ c: 'd' })
  })

  test('does not exist', ()=> {
    let object = {}
    expect(
      odotty.get({ object, path: 'a.b.c' })
    ).toBeUndefined()
  })
})

test('d', ()=> {
  const objectd = require('object-dot')
  let object = { foo: { bar: 'you!' }}
  console.log(
    objectd.get({ object, path: 'foo.bar.c.d'})
  )
})
