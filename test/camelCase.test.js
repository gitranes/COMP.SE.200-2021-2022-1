import camelCase from '../src/camelCase.js'

// Three different styles
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('One string camel case', () => {
  // expect
  it('hello -> hello', () => {
    expect(camelCase('hello')).equal('hello')
  })
})

describe('One number camel case', () => {
  // expect
  it('123 -> 123', () => {
    expect(camelCase('123')).equal('123')
  })
})

describe('From lowercase to camel case', () => {
  // expect
  it('hello world -> helloWorld', () => {
    expect(camelCase('hello world')).equal('helloWorld')
  })
})

describe('String and number to camel case', () => {
  // expect
  it('number 2 -> number2', () => {
    expect(camelCase('number 2')).equal('number2')
  })
})

describe('Multiple words to camel case', () => {
  // expect
  it('hello big world -> helloBigWorld', () => {
    expect(camelCase('hello big world')).equal('helloBigWorld')
  })
})

describe('Multiple words with first capitalized to camel case', () => {
  // expect
  it('hello big big world -> helloBigBigWorld', () => {
    expect(camelCase('Hello big big world')).equal('helloBigBigWorld')
  })
})

describe('Simple snake case to camel case', () => {
  // expect
  it('snake_case -> snakeCase', () => {
    expect(camelCase('snake_case')).equal('snakeCase')
  })
})

describe('Simple snake case with number to camel case', () => {
  // expect
  it('snake_123 -> snake123', () => {
    expect(camelCase('snake_123')).equal('snake123')
  })
})

describe('Leading and trailing simple snake case to camel case', () => {
  // expect
  it('_snake_case_ -> snakeCase', () => {
    expect(camelCase('_snake_case_')).equal('snakeCase')
  })
})

describe('Double leading and trailing simple snake case with number to camel case', () => {
  // expect
  it('__snake_123_case__ -> snake123case', () => {
    expect(camelCase('__snake_123__')).equal('snake123')
  })
})

describe('Multiple snake case to camel case', () => {
  // expect
  it('snake_case snake_case_1 -> snakeCaseSnakeCase1', () => {
    expect(camelCase('snake_case snake_case_1')).equal('snakeCaseSnakeCase1')
  })
})

describe('Snake case with caps case to camel case', () => {
  // expect
  it('SNAKE_CASE_1 -> snakeCase1', () => {
    expect(camelCase('SNAKE_CASE_1')).equal('snakeCase1')
  })
})

describe('Multiple snake case with caps case to camel case', () => {
  // expect
  it('SNAKE CASE_1 -> snakeCase1', () => {
    expect(camelCase('SNAKE CASE_1')).equal('snakeCase1')
  })
})

describe('Redundant snake with caps case to camel case', () => {
  // expect
  it('SNAKE__case__1 -> snakeCase1', () => {
    expect(camelCase('SNAKE__case__1')).equal('snakeCase1')
  })
})

describe('Leading and trailing redundant snake with caps case to camel case', () => {
  // expect
  it('__SNAKE__case__1__ -> snakeCase1', () => {
    expect(camelCase('__SNAKE__case__1__')).equal('snakeCase1')
  })
})

describe('Simple hyphenation to snake case', () => {
  // expect
  it('simple-world -> simpleWorld', () => {
    expect(camelCase('simple-world')).equal('simpleWorld')
  })
})

describe('Multiple hyphenation to snake case', () => {
  // expect
  it('not-so-simple-123 simple-world -> notSoSimple123SimpleWorld', () => {
    expect(camelCase('not-so-simple-123 simple-world')).equal('notSoSimple123SimpleWorld')
  })
})

describe('Multiple hyphenation to snake case with caps', () => {
  // expect
  it('HELLO-simple-world -> helloSimpleWorld', () => {
    expect(camelCase('Hello-simple-world')).equal('helloSimpleWorld')
  })
})

describe('Words with leading and trailing hyphenation to snake case', () => {
  // expect
  it('-hello-simple-world- -> helloSimpleWorld', () => {
    expect(camelCase('-hello-simple-world-')).equal('helloSimpleWorld')
  })
})

describe('Words with redundant leading and trailing hyphenation to snake case', () => {
  // expect
  it('--hello-simple-world-- -> helloSimpleWorld', () => {
    expect(camelCase('--hello-simple-world--')).equal('helloSimpleWorld')
  })
})
