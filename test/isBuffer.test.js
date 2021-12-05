import isBuffer from '../src/isBuffer.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Simple isBuffer test with null', () => {
  it('null -> true', () => {
    expect(isBuffer(null)).equal(false)
  })
})

describe('Simple isBuffer test with null', () => {
  it('null -> true', () => {
    expect(isBuffer(exports)).equal(false)
  })
})

describe('Simple isBuffer test with string', () => {
  it('Test -> false', () => {
    expect(isBuffer('Test')).equal(false)
  })
})

describe('Simple isBuffer test with int', () => {
  it('1 -> false', () => {
    expect(isBuffer(1)).equal(false)
  })
})

describe('Simple isBuffer test with number in buffer', () => {
  it('Buffer.alloc(2) -> true', () => {
    expect(isBuffer(Buffer.alloc(2))).equal(true)
  })
})

describe('isBuffer test with Uint8Array', () => {
  it('(new Uint8Array(2)) -> false', () => {
    expect(isBuffer(new Uint8Array(2))).equal(false)
  })
})

describe('isBuffer test with Int8Array', () => {
  it('(new Int8Array(2)) -> false', () => {
    expect(isBuffer(new Int8Array(2))).equal(false)
  })
})

describe('isBuffer test with Uint8ClampedArray', () => {
  it('(new Uint8ClampedArray(2)) -> false', () => {
    expect(isBuffer(new Uint8ClampedArray(2))).equal(false)
  })
})

describe('isBuffer test with Uint16Array', () => {
  it('(new Uint16Array(2)) -> false', () => {
    expect(isBuffer(new Uint16Array(2))).equal(false)
  })
})

describe('isBuffer test with Int32Array', () => {
  it('(new Int32Array(2)) -> false', () => {
    expect(isBuffer(new Int32Array(2))).equal(false)
  })
})

describe('isBuffer test with ones as buffer values', () => {
  it('10, 1 -> true', () => {
    expect(isBuffer(Buffer.alloc(10, 1))).equal(true)
  })
})

describe('isBuffer test with defined values', () => {
  it('[1,2,3] -> true', () => {
    expect(isBuffer(Buffer.from([1, 2, 3]))).equal(true)
  })
})
