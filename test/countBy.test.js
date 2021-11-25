import countBy from '../src/countBy.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Simple countBy test with empty object', () => {
  const users = []

  // expect
  it('[] -> {}', () => {
    expect(countBy(users, value => value.active)).to.deep.equal({})
  })
})

describe('Simple countBy test with three values', () => {
  const users = [
    { user: 'barney', active: true },
    { user: 'betty', active: true },
    { user: 'fred', active: false }]

  // expect
  it('[{ ... }] -> {"false": 1, "true": 2}', () => {
    expect(countBy(users, value => value.active)).to.deep.equal({ true: 2, false: 1 })
  })
})

describe('Simple countBy test with four values', () => {
  const users = [
    { user: 'barney', active: true },
    { user: 'betty', active: true },
    { user: 'billy', active: true },
    { user: 'fred', active: false }]

  // expect
  it('[{ ... }] -> {"false": 1, "true": 3}', () => {
    expect(countBy(users, value => value.active)).to.deep.equal({ true: 3, false: 1 })
  })
})

describe('A countBy test with four equal values', () => {
  const users = [
    { user: 'barney', active: true },
    { user: 'betty', active: true },
    { user: 'billy', active: true },
    { user: 'fred', active: true }]

  // expect
  it('[{ ... }] -> {"true": 4}', () => {
    expect(countBy(users, value => value.active)).to.deep.equal({ true: 4 })
  })
})

describe('A countBy test with four values and multiple attributes', () => {
  const users = [
    { user: 'barney', active: true, age: 30 },
    { user: 'betty', active: true, age: 30 },
    { user: 'billy', active: true, age: 25 },
    { user: 'fred', active: false, age: 27 }]

  // expect
  it('[{ ... }] -> { 30: 2, 25: 1, 27: 1 }', () => {
    expect(countBy(users, value => value.age)).to.deep.equal({ 30: 2, 25: 1, 27: 1 })
  })
})
