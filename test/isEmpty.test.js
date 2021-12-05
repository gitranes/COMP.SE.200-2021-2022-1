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
  it('1 -> true', () => {
    expect(isEmpty(1)).equal(true)
  })
})

describe('Simple isEmpty test with char', () => {
  it('a -> false', () => {
    expect(isEmpty('a')).equal(false)
  })
})

describe('Simple isEmpty test with empty string', () => {
  it('a -> false', () => {
    expect(isEmpty('')).equal(true)
  })
})

describe('Simple isEmpty test with bool', () => {
  it('true -> true', () => {
    expect(isEmpty(true)).equal(true)
  })
})

describe('isEmpty test with empty object', () => {
  it('{} -> true', () => {
    expect(isEmpty({ })).equal(true)
  })
})

describe('isEmpty test with object', () => {
  it('{ a: 1 } -> false', () => {
    expect(isEmpty({ a: 1 })).equal(false)
  })
})

describe('isEmpty test with array', () => {
  it('[1,2] -> false', () => {
    expect(isEmpty([1, 2])).equal(false)
  })
})

describe('isEmpty test with empty array', () => {
  it('[] -> true', () => {
    expect(isEmpty([])).equal(true)
  })
})

describe('isEmpty test with prototype', () => {
  it('Set() -> true', () => {
    expect(isEmpty(Object.prototype)).equal(true)
  })
})

describe('isEmpty test with empty map', () => {
  it('Map() -> false', () => {
    expect(isEmpty(new Map())).equal(true)
  })
})

describe('isEmpty test with non-empty map', () => {
  it('Map(1: 2) -> true', () => {
    expect(isEmpty(new Map([[1, 2]]))).equal(false)
  })
})

describe('isEmpty test with empty set', () => {
  it('Set() -> true', () => {
    expect(isEmpty(new Set())).equal(true)
  })
})

describe('isEmpty test with non-empty set', () => {
  it('Set(1, 2) -> false', () => {
    expect(isEmpty(new Set([1, 2]))).equal(false)
  })
})

describe('isEmpty test with empty Buffer', () => {
  it('Buffer() -> true', () => {
    expect(isEmpty(Buffer.alloc(0))).equal(true)
  })
})

describe('isEmpty test with non-empty Buffer', () => {
  it('Buffer.alloc(1) -> false', () => {
    expect(isEmpty(Buffer.alloc(1))).equal(false)
  })
})

describe('isEmpty test with empty TypedArray', () => {
  it('Uint8Array() -> true', () => {
    expect(isEmpty(new Uint8Array())).equal(true)
  })
})

describe('isEmpty test with non-empty TypedArray', () => {
  it('Uint8Array(1) -> true', () => {
    expect(isEmpty(new Uint8Array(1))).equal(false)
  })
})

describe('isEmpty test with empty arguments', () => {
  function returnsArgs () {
    return arguments
  }
  it('empty arguments -> true', () => {
    expect(isEmpty(returnsArgs())).equal(true)
  })
})

describe('isEmpty test with non-empty arguments', () => {
  function returnsArgs () {
    return arguments
  }
  it('non-empty arguments -> false', () => {
    expect(isEmpty(returnsArgs(1, 2))).equal(false)
  })
})
