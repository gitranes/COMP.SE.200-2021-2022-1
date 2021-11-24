import memoize from '../src/memoize.js'
import toString from '../src/toString.js'
import words from '../src/words.js'
import reduce from '../src/reduce.js'
import eq from '../src/eq.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

/*
Example:
const values = memoize(values)
values(object)
// => [1, 2]

values(other)
// => [3, 4]

object.a = 2
values(object)
// => [1, 2]

// Modify the result cache.
values.cache.set(object, ['a', 'b'])
values(object)
// => ['a', 'b']

// Replace `memoize.Cache`.
memoize.Cache = WeakMap
*/

// Little unsure with this one:
// Does the function require that the argument changed is const?

// Doesn't work
describe('Memoize test with toString and int', () => {
// expect
  it('ts(a) -> 3', () => {
    let a = 3
    const ts = memoize(toString)
    ts(a)
    a = a + 1
    expect(ts(a)).equal('3')
  })
})

// Works
describe('Memoize test with toString and array', () => {
  // expect
  it('ts(a) -> 3', () => {
    const a = [1, 2, 3]
    const ts = memoize(toString)
    ts(a)
    a[0] = 2
    expect(ts(a)).equal('1,2,3')
  })
})

// Doesn't work
describe('Memoize test with words', () => {
  // expect
  it('ts(a) -> [Mikko, Jukka]', () => {
    let a = 'Mikko, Jukka'
    const ws = memoize(words)
    ws(a)
    a = a + ', Maija'
    expect(ws(a)).to.deep.equal(['Mikko', 'Jukka'])
  })
})

// Works
describe('Memoize test with reduce', () => {
  // expect
  it('rd(a, (sum, n) => sum + n, 0) -> 6', () => {
    const a = [1, 5]
    const rd = memoize(reduce)
    rd(a, (sum, n) => sum + n, 0)
    a[0] = 5
    expect(rd(a, (sum, n) => sum + n, 0)).equal(6)
  })
})

// Doesn't work
describe('Memoize test with eq', () => {
  // expect
  it('rd(a, (sum, n) => sum + n, 0) -> 6', () => {
    let a = 1
    const b = 1
    const e = memoize(eq)
    e(a, b)
    a = 2
    expect(e(a, b)).equal(true)
  })
})
