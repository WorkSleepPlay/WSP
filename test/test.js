var assert = require('assert');
var should = require('chai').should();
var expect  = require('chai').expect;

it('Checking for null', function(){
    var car = null;
    //car.should.not.exist; (Cannot read property 'should' of null)
    should.not.exist(car);
});

expect({a: 1}).to.deep.equal({a: 1});