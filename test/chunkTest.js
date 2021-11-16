import chunk from '../src/chunk.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Empty array chunk', () => {
  // expect
  it('[],1 -> []', () => {
    expect(chunk([], 1)).equal([])
  })
})

describe('Simple array chunk', () => {
  // expect
  it('[1,2],1 -> [[1],[2]]', () => {
    expect(chunk([1, 2], 1)).equal([[1], [2]])
  })
})

describe('Char array chunk to size 1', () => {
  // expect
  it('[a,b,c],1 -> [[a],[b],[c]]', () => {
    expect(chunk(['a', 'b', 'c'], 1)).equal([['a'], ['b'], ['c']])
  })
})

describe('Char array chunk to size 2', () => {
  // expect
  it('[a,b,c,d],2 -> [[a,b],[c,d]]', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).equal([['a', 'b'], ['c', 'd']])
  })
})

describe('Char array without residual', () => {
  // expect
  it('[a,b,c,d,e,f],3 -> [[a,b,c],[d,e,f]]', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e', 'f'], 3)).equal([['a', 'b', 'c'], ['d', 'e', 'f']])
  })
})

describe('Char array with residual', () => {
  // expect
  it('[a,b,c,d,e],3 -> [[a,b,c],[d,e]]', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 3)).equal([['a', 'b', 'c'], ['d', 'e']])
  })
})

// Tämän kanssa assertiossa ehkä jotain häröä
describe('Chunk size equal to array size', () => {
  // expect
  it('[a,b,c,d,e],5 -> [a,b,c,d,e]', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 5)).equal([['a', 'b', 'c', 'd', 'e']])
  })
})

describe('Chunk size more than array size', () => {
  // expect
  it('[a,b,c,d,e],6 -> [a,b,c,d,e]', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 6)).equal([['a', 'b', 'c', 'd', 'e']])
  })
})
