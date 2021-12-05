import toInteger from '../src/toInteger.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Simple toInteger test with null', () => {
// expect
  it('null -> 0', () => {
    expect(toInteger(null)).equal(0)
  })
})

describe('Simple toInteger test with 1', () => {
  it('1 -> 1', () => {
    expect(toInteger(1)).equal(1)
  })
})

describe('Simple toInteger test with -1', () => {
  it('-1 -> -1', () => {
    expect(toInteger(-1)).equal(-1)
  })
})

describe('Simple toInteger test with 0', () => {
  it('0 -> 0', () => {
    expect(toInteger(0)).equal(0)
  })
})

describe('toInteger test with inf', () => {
  it('Inf -> 1.7976931348623157e+308', () => {
    expect(toInteger(Infinity)).equal(1.7976931348623157e+308)
  })
})

describe('toInteger test with Number.MIN_VALUE', () => {
  it('Number.MIN_VALUE -> 0', () => {
    expect(toInteger(Number.MIN_VALUE)).equal(0)
  })
})

describe('toInteger test with decimals 1', () => {
  it('3.9 -> 3', () => {
    expect(toInteger(3.9)).equal(3)
  })
})

describe('toInteger test with decimals 2', () => {
  it('3.1 -> 3', () => {
    expect(toInteger(3.1)).equal(3)
  })
})

describe('toInteger test with decimal string 1', () => {
  it('3.9 -> 3', () => {
    expect(toInteger('3.9')).equal(3)
  })
})

describe('toInteger test with decimal string 2', () => {
  it('3.1 -> 3', () => {
    expect(toInteger('3.1')).equal(3)
  })
})

describe('toInteger test with negative decimal string', () => {
  it('3.1 -> 3', () => {
    expect(toInteger('-3.1')).equal(-3)
  })
})

describe('toInteger test with integer string', () => {
  it('3 -> 3', () => {
    expect(toInteger('3')).equal(3)
  })
})

describe('toInteger test with integer NaN', () => {
  it('NaN -> 0', () => {
    expect(toInteger(NaN)).equal(0)
  })
})
