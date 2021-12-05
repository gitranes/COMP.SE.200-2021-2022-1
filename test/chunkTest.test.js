import chunk from '../src/chunk.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Null array', () => {
  it('null -> []', () => {
    expect(chunk(null)).to.deep.equal([])
  })
})

describe('Empty array chunk', () => {
  it('[],1 -> []', () => {
    expect(chunk([], 1)).to.deep.equal([])
  })
})

describe('Empty array chunk', () => {
  it('[],1 -> []', () => {
    expect(chunk([], 1)).to.deep.equal([])
  })
})

describe('Simple array chunk', () => {
  it('[1,2],1 -> [[1],[2]]', () => {
    expect(chunk([1, 2], 1)).to.deep.equal([[1], [2]])
  })
})

describe('Char array chunk to size 1', () => {
  it('[a,b,c],1 -> [[a],[b],[c]]', () => {
    expect(chunk(['a', 'b', 'c'], 1)).to.deep.equal([['a'], ['b'], ['c']])
  })
})

describe('Char array chunk to size 2', () => {
  it('[a,b,c,d],2 -> [[a,b],[c,d]]', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']])
  })
})

describe('Char array without residual', () => {
  it('[a,b,c,d,e,f],3 -> [[a,b,c],[d,e,f]]', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e', 'f'], 3)).to.deep.equal([['a', 'b', 'c'], ['d', 'e', 'f']])
  })
})

describe('Char array with residual', () => {
  it('[a,b,c,d,e],3 -> [[a,b,c],[d,e]]', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 3)).to.deep.equal([['a', 'b', 'c'], ['d', 'e']])
  })
})

// Tämän kanssa assertiossa ehkä jotain häröä
describe('Chunk size equal to array size', () => {
  it('[a,b,c,d,e],5 -> [a,b,c,d,e]', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 5)).to.deep.equal([['a', 'b', 'c', 'd', 'e']])
  })
})

describe('Chunk size more than array size', () => {
  it('[a,b,c,d,e],6 -> [a,b,c,d,e]', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 6)).to.deep.equal([['a', 'b', 'c', 'd', 'e']])
  })
})
