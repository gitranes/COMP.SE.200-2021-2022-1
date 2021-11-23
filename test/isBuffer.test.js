import isBuffer from '../src/isBuffer.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Simple isBuffer test', () => {
// expect
  it('Buffer.from(null) -> true', () => {
    expect(isBuffer(Buffer.alloc(2))).equal(true)
  })
})

describe('isBuffer test with Uint8Array', () => {
  // expect
  it('Buffer.from(new Uint8Array(2)) -> false', () => {
    expect(isBuffer(new Uint8Array(2))).equal(false)
  })
})

describe('isBuffer test with char', () => {
  // expect
  it('Buffer.from(a) -> false', () => {
    expect(isBuffer('a')).equal(false)
  })
})

describe('Simple isBuffer test', () => {
  // expect
  it('Buffer.from(null) -> true', () => {
    expect(isBuffer(Buffer.alloc(2))).equal(true)
  })
})
