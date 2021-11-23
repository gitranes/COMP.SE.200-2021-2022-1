import isTypedArray from '../src/isTypedArray.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Simple isTypedArray test with empty array', () => {
  // expect
  it('[] -> false', () => {
    expect(isTypedArray([])).equal(false)
  })
})

describe('isTypedArray test with Uint8Array array', () => {
  // expect
  it('Uint8Array(5) -> true', () => {
    expect(isTypedArray(new Uint8Array(5))).equal(true)
  })
})

describe('isTypedArray test with Float32Array array', () => {
  // expect
  it('Float32Array(5) -> true', () => {
    expect(isTypedArray(new Float32Array(5))).equal(true)
  })
})

describe('isTypedArray test with array', () => {
  // expect
  it('[a, b] -> false', () => {
    expect(isTypedArray(['a', 'b'])).equal(false)
  })
})
