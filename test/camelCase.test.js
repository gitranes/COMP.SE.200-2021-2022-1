import camelCase from '../src/camelCase.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('From lowercase to camel case', () => {
  // expect
  it('hello world -> helloWorld', () => {
    expect(camelCase('hello world')).equal('helloWorld')
  })
})
