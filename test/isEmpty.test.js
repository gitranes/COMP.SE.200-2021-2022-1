import isEmpty from '../src/isEmpty.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Simple isEmpty test with null', () => {
// expect
  it('null -> true', () => {
    expect(isEmpty(null)).equal(true)
  })
})

describe('Simple isEmpty test with int', () => {
  // expect
  it('1 -> false', () => {
    expect(isEmpty(1)).equal(false)
  })
})

describe('Simple isEmpty test with bool', () => {
  // expect
  it('true -> false', () => {
    expect(isEmpty(1)).equal(false)
  })
})

describe('isEmpty test with map', () => {
  // expect
  it('{ a: 1 } -> false', () => {
    expect(isEmpty({ a: 1 })).equal(false)
  })
})

describe('isEmpty test with empty map', () => {
  // expect
  it('{} -> false', () => {
    expect(isEmpty({ })).equal(false)
  })
})

describe('isEmpty test with array', () => {
  // expect
  it('[1,2] -> false', () => {
    expect(isEmpty([1, 2])).equal(false)
  })
})

describe('isEmpty test with empty array', () => {
  // expect
  it('[] -> false', () => {
    expect(isEmpty([])).equal(true)
  })
})


