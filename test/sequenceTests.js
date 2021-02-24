const expect = require('chai').expect
const should = require('chai').should()

describe('My first wallaby test', function () {
    it('should work', function () {
        expect(true)
    })
})

describe('My first wallaby test', function () {
    it('should work', function () {
        true.should.equal(true)
    })
})