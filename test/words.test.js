import words from '../src/words.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('words test with no matches', () => {
  it('hello, \\d -> []', () => {
    expect(words('hello', /\d+/g)).to.deep.equal([])
  })
})

describe('words test with non-words', () => {
  it('}}} -> []', () => {
    expect(words('}}}')).to.deep.equal([])
  })
})

describe('Simple words test with one word', () => {
  it('Mikko -> [Mikko]', () => {
    expect(words('Mikko')).to.deep.equal(['Mikko'])
  })
})

describe('Simple words test with two words', () => {
  it('Mikko, Jukka -> [Mikko, Jukka]', () => {
    expect(words('Mikko, Jukka')).to.deep.equal(['Mikko', 'Jukka'])
  })
})

describe('Simple words test with three words', () => {
  it('Mikko, Jukka & Maija -> [Mikko, Jukka, Maija]', () => {
    expect(words('Mikko, Jukka & Maija')).to.deep.equal(['Mikko', 'Jukka', 'Maija'])
  })
})

describe('Simple words test with three words, include and sign', () => {
  it('Mikko, Jukka & Maija , /[^, ]+/g -> [Mikko, Jukka, &, Maija]', () => {
    expect(words('Mikko, Jukka & Maija', /[^, ]+/g)).to.deep.equal(['Mikko', 'Jukka', '&', 'Maija'])
  })
})
