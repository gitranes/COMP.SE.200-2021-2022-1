import memoize from '../src/memoize.js'
import toString from '../src/toString.js'
import words from '../src/words.js'
import reduce from '../src/reduce.js'
import eq from '../src/eq.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Memoize test with null and null', () => {
  it('throw TypeError', () => {
    expect(() => memoize(null, null)).to.throw('Expected a function')
  })
})

describe('Memoize test with simple resolver', () => {
  it('ts() -> 1', () => {
    const ts = memoize(() => { return 1 }, () => {})
    ts()
    expect(ts()).to.equal(1)
  })
})

describe('Memoize pre-set null cache', () => {
  it('ts() -> 1', () => {
    memoize.Cache = null
    const ts = memoize(() => { return 1 })
    ts()
    expect(ts()).to.equal(1)
  })
})

describe('Memoize test with toString and int', () => {
  it('ts(a) -> 4', () => {
    let a = 3
    const ts = memoize(toString)
    ts(a)
    a = a + 1
    expect(ts(a)).equal('4')
  })
})

describe('Memoize test with toString and array', () => {
  it('ts([2, 2, 3]) -> "1,2,3"', () => {
    const a = [1, 2, 3]
    const ts = memoize(toString)
    ts(a)
    a[0] = 2
    expect(ts(a)).equal('1,2,3')
  })
})

// Doesn't work
describe('Memoize test with words', () => {
  it('ts(a) -> [Mikko, Jukka, Maija]', () => {
    let a = 'Mikko, Jukka'
    const ws = memoize(words)
    ws(a)
    a = a + ', Maija'
    expect(ws(a)).to.deep.equal(['Mikko', 'Jukka', 'Maija'])
  })
})

// Works
describe('Memoize test with reduce', () => {
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
  it('eq(1, 1); eq(2, 1) -> false', () => {
    let a = 1
    const b = 1
    const e = memoize(eq)
    e(a, b)
    a = 2
    expect(e(a, b)).equal(false)
  })
})
