import isBuffer from '../src/isBuffer.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Simple isBuffer test with null', () => {
// expect
  it('Buffer.alloc(null) -> true', () => {
    expect(isBuffer(Buffer.alloc(null))).equal(false)
  })
})

describe('Simple isBuffer test with number', () => {
  // expect
  it('Buffer.alloc(2) -> true', () => {
    expect(isBuffer(Buffer.alloc(2))).equal(false)
  })
})

describe('isBuffer test with Uint8Array', () => {
  // expect
  it('(new Uint8Array(2)) -> false', () => {
    expect(isBuffer(new Uint8Array(2))).equal(false)
  })
})

describe('isBuffer test with Int8Array', () => {
  // expect
  it('(new Int8Array(2)) -> false', () => {
    expect(isBuffer(new Int8Array(2))).equal(false)
  })
})

describe('isBuffer test with Uint8ClampedArray', () => {
  // expect
  it('(new Uint8ClampedArray(2)) -> false', () => {
    expect(isBuffer(new Uint8ClampedArray(2))).equal(false)
  })
})

describe('isBuffer test with Uint16Array', () => {
  // expect
  it('(new Uint16Array(2)) -> false', () => {
    expect(isBuffer(new Uint16Array(2))).equal(false)
  })
})

describe('isBuffer test with Int32Array', () => {
  // expect
  it('(new Int32Array(2)) -> false', () => {
    expect(isBuffer(new Int32Array(2))).equal(false)
  })
})

describe('isBuffer test with two buffer values', () => {
  // expect
  it('10, 1 -> false', () => {
    expect(isBuffer(Buffer.alloc(10, 1))).equal(true)
  })
})
