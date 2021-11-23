import memoize from '../src/memoize.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

// Little problems with this one:
/*
describe('Memoize test with map', () => {
// expect
  it('null -> true', () => {
    const object = { a: 1, b: 2 }
    const values = memoize(values)
    object.a = 2
    expect(values(object)).equal([1, 2])
  })
})
*/
