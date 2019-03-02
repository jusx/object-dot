const odjectd = require('object-dot')

describe('set', () => {
  test('deep nested', () => {
    let object = {}
    odjectd.set({ object, path: 'a.b.c.d.e.f.g.h.i.j.k', value: 'my value' })
    expect(object.a.b.c.d.e.f.g.h.i.j.k).toBe('my value')
  })

  test('medium nested', () => {
    let object = {}
    odjectd.set({ object, path: 'a.b.c.d', value: 'my value' })
    expect(object.a.b.c.d).toBe('my value')
  })

  test('shallow nested', () => {
    let object = {}
    odjectd.set({ object, path: 'a', value: 'my value' })
    expect(object.a).toBe('my value')
  })
})

describe('get', () => {
  test('exists', () => {
    let object = { a: { b: { c: 'd' } } }
    expect(
      odjectd.get({ object, path: 'a.b.c' })
    ).toBe('d')
  })

  test('exist in the middle ', () => {
    let object = { a: { b: { c: 'd' } } }
    expect(
      odjectd.get({ object, path: 'a.b' })
    ).toEqual({ c: 'd' })
  })

  test('does not exist', () => {
    let object = {}
    expect(
      odjectd.get({ object, path: 'a.b.c' })
    ).toBeUndefined()
  })

  test('default', () => {
    let object = {}
    expect(
      odjectd.get({ object, path: 'a.b.c', value: 'foo' })
    ).toBe('foo')
  })
})
