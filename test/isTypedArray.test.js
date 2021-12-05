import isTypedArray from '../src/isTypedArray.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('isTypedArray with undefined', () => {
  it('undefined -> false', () => {
    expect(isTypedArray(undefined)).equal(false)
  })
})

describe('isTypedArray with null', () => {
  it('null -> false', () => {
    expect(isTypedArray(null)).equal(false)
  })
})

describe('Simple isTypedArray test with empty array', () => {
  it('[] -> false', () => {
    expect(isTypedArray([])).equal(false)
  })
})

describe('isTypedArray test with Uint8Array array', () => {
  it('Uint8Array(5) -> true', () => {
    expect(isTypedArray(new Uint8Array(5))).equal(true)
  })
})

describe('isTypedArray test with Float32Array array', () => {
  it('Float32Array(5) -> true', () => {
    expect(isTypedArray(new Float32Array(5))).equal(true)
  })
})

describe('isTypedArray test with BigInt64Array array', () => {
  it('BigInt64Array(5) -> true', () => {
    expect(isTypedArray(new BigInt64Array(5))).equal(true)
  })
})

describe('isTypedArray test with BigUint64Array array', () => {
  it('BigUint64Array(5) -> true', () => {
    expect(isTypedArray(new BigUint64Array(5))).equal(true)
  })
})

describe('isTypedArray test with array', () => {
  it('[a, b] -> false', () => {
    expect(isTypedArray(['a', 'b'])).equal(false)
  })
})
