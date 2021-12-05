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
  it('-3 -> -3', () => {
    expect(toString(-3)).equal('-3')
  })
})

describe('toString test with negative decimal', () => {
  it('-3.1 -> -3.1', () => {
    expect(toString(-3)).equal('-3.1')
  })
})

describe('toString test with 0', () => {
  it('-0 -> \'-0\'', () => {
    expect(toString(-0)).equal('-0')
  })
})

describe('toString test with null', () => {
  it('null -> \'\'', () => {
    expect(toString(null)).equal('')
  })
})

describe('toString test with array of nulls', () => {
  it('[null, null] -> \',\'', () => {
    expect(toString([null, null])).equal(',')
  })
})

describe('toString test with inf', () => {
  it('Infinity -> Infinity', () => {
    expect(toString(Infinity)).equal('Infinity')
  })
})

describe('toString test with inf', () => {
  it('Infinity -> Infinity', () => {
    expect(toString(Infinity)).equal('Infinity')
  })
})

describe('toString test with array', () => {
  it('[-1,0,1] -> -1,0,1', () => {
    expect(toString([-1, 0, 1])).equal('-1,0,1')
  })
})

describe('toString test with string', () => {
  it('-1,0,1 -> -1,0,1', () => {
    expect(toString('-1,0,1')).equal('-1,0,1')
  })
})

describe('toString test with bool', () => {
  it('true -> true', () => {
    expect(toString(true)).equal('true')
  })
})

describe('toString test with symbol', () => {
  const x = Symbol('x')
  it('x -> x', () => {
    expect(toString(x)).equal('x')
  })
})
