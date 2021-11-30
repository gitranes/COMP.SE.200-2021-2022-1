import toString from '../src/toString.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Simple toString test with integer', () => {
// expect
  it('3 -> 3', () => {
    expect(toString(3)).equal('3')
  })
})

describe('Simple toString test with sign', () => {
  // expect
  it('-3 -> -3', () => {
    expect(toString(-3)).equal('-3')
  })
})

describe('toString test with negative decimal', () => {
  // expect
  it('-3.1 -> -3.1', () => {
    expect(toString(-3)).equal('-3.1')
  })
})

describe('toString test with null', () => {
  // expect
  it('null -> ', () => {
    expect(toString(null)).equal('null')
  })
})

describe('toString test with inf', () => {
  // expect
  it('Infinity -> Infinity', () => {
    expect(toString(Infinity)).equal('Infinity')
  })
})

describe('toString test with inf', () => {
  // expect
  it('Infinity -> Infinity', () => {
    expect(toString(Infinity)).equal('Infinity')
  })
})

describe('toString test with array', () => {
  // expect
  it('[-1,0,1] -> -1,0,1', () => {
    expect(toString([-1, 0, 1])).equal('-1,0,1')
  })
})

describe('toString test with string', () => {
  // expect
  it('-1,0,1 -> -1,0,1', () => {
    expect(toString('-1,0,1')).equal('-1,0,1')
  })
})

describe('toString test with bool', () => {
  // expect
  it('true -> true', () => {
    expect(toString(true)).equal('true')
  })
})

describe('toString test with symbol', () => {
  // expect
  let x = Symbol('x')
  it('x -> x', () => {
    expect(toString(x)).equal('x')
  })
})
