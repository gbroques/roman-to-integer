var assert = require('assert');
const romanToInteger = require('./index');


describe('romanToInteger', function () {
    it('should return 1 for I', function () {
        assert.equal(romanToInteger('I'), 1);
    });
    it('should return 2 for II', function () {
        assert.equal(romanToInteger('II'), 2);
    });
});
