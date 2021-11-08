import camelCase from '../src/camelCase.js';

// Three different styles
import { assert, expect, should } from 'chai';
should();

describe("From lowercase to camel case", () => {
    // should
    it("hello world -> helloWorld", () =>{
        camelCase('hello world').should.equal('helloWorld');
    });
    // expect
    it("hello world -> helloWorld", () =>{
        expect(camelCase('hello world')).equal('helloWorld');
    });
    // assert
    it("hello world -> helloWorld", () =>{
        assert.equal(camelCase('hello world'), 'helloWorld');
    });
})
