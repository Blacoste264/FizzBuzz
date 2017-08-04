const assert = require('chai').assert;
const expect = require('chai').expect;
const fizzBuzz = require('../fizzBuzz.js');

describe.only('fizzBuzz', function () {
    describe('Smoke tests', function () {
        it('should exist', function () {
            expect(fizzBuzz).to.exist;
        })
        it('Should be a function', function() {
            expect(fizzBuzz).to.be.a('function');
        })
    })
})