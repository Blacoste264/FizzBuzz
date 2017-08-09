const assert = require('chai').assert;
const expect = require('chai').expect;
const fizzBuzz = require('../fizzBuzz.js');

describe('fizzBuzz', function () {
    describe('Smoke tests', function () {
        it('should exist', function () {
            expect(fizzBuzz).to.exist;
        })
        it('Should be a function', function () {
            expect(fizzBuzz).to.be.a('function');
        })
    })
    describe('Functionality Tests', function () {
        it('Pass param 5 should return \'BUZZ\'', function () {
            expect(fizzBuzz(5)).to.equal('BUZZ');
        });
        it('Pass param 5 should return \'FIZZ\'', function () {
            expect(fizzBuzz(3)).to.equal('FIZZ');
        });
        it('Pass param 15 should return \'FIZZBUZZ\'', function () {
            expect(fizzBuzz(15)).to.equal('FIZZBUZZ');
        });
    })
})