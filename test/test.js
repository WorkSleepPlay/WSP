var assert = require('assert');
var chai = require('chai')
var should = chai.should();
var expect = require('chai').expect;


it('Checking for null', function () {
    var car = null;
    should.not.exist(car);
});

it('Checking that camel is a string', function () {
    var camel = 'camel';
    expect(camel).to.be.a('string');
});