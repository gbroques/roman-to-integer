const assert = require('assert');
const romanToInteger = require('./index');

describe('romanToInteger', function () {
    const tests = [
        {roman: 'I', integer: 1},
        {roman: 'II', integer: 2},
        {roman: 'III', integer: 3},
        {roman: 'IV', integer: 4},
        {roman: 'V', integer: 5},
        {roman: 'VI', integer: 6},
        {roman: 'VII', integer: 7},
        {roman: 'VIII', integer: 8},
        {roman: 'IX', integer: 9},
        {roman: 'X', integer: 10},
        {roman: 'LVIII', integer: 58},
        {roman: 'MCMXCIV', integer: 1994}
    ];
     
    tests.forEach(({roman, integer}) => {
        it(`should return ${integer} for ${roman}`, function () {
            assert.equal(romanToInteger(roman), integer);
        });
    });
});
