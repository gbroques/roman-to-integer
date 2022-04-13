/**
 * Roman numerals are represented by seven different symbols:
 * I, V, X, L, C, D and M.
 */
 const INTEGER_BY_ROMAN_NUMERAL = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

/**
 * There are six instances where subtraction is used:
 *
 * 1. I can be placed before V (5) and X (10) to make 4 and 9. 
 * 2. X can be placed before L (50) and C (100) to make 40 and 90. 
 * 3. C can be placed before D (500) and M (1000) to make 400 and 900.
 */
const SUBTRACTION_PATTERNS = new Set([
    'IV',
    'IX',
    'XL',
    'XC',
    'CD',
    'CM'
]);

/**
 * Converts roman numerals to an integer.
 * 
 * @example
 * romanToInteger('IV')
 * 4
 * 
 * @param {string} roman String of roman numerals.
 * @returns {number} Integer
 */
function romanToInteger(roman) {
    const romanNumerals = Array.from(roman);
    return romanNumerals.reduce((sum, romanNumeral, index) => {
        const operation = getAddOrSubtract(romanNumerals, index);
        const integer = INTEGER_BY_ROMAN_NUMERAL[romanNumeral];
        return operation(sum, integer);
    }, 0);
}

/**
 * Get operation to add or subtract the integer value for a roman numeral.
 * 
 * @param {Array} romanNumerals Array of roman numerals.
 * @param {number} index Index of roman numeral to determine whether
 *                       to add or subtract it's integer value.
 * @returns {Function} Function to add or subtract two numbers.
 */
function getAddOrSubtract(romanNumerals, index) {
    // if there's only 1 roman numeral, or if it's the last roman numeral,
    // then add it's value.
    if (index === romanNumerals.length - 1) {
        return add;
    }
    const windows = toWindows(romanNumerals, 2);
    const window = windows[index];
    const romanNumeral = window.join('');
    const shouldSubtract = SUBTRACTION_PATTERNS.has(romanNumeral);
    return shouldSubtract ? subtract : add;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

/**
 * Converts an array into an array of windows.
 * 
 * @example
 * toWindows([1, 2, 3, 4], 2)
 * [[1, 2], [2, 3], [3, 4]]
 * 
 * @example
 * toWindows([1], 2)
 * []
 * 
 * @see {@link https://stackoverflow.com/a/59322890}
 *
 * @param {Array} array Array to create windows from.
 * @param {number} windowSize Size of window.
 * @returns Array of windows.
 */
function toWindows(array, windowSize) { 
    return array.reduce((windows, _, index) => {
        if (index + windowSize > array.length) {
            return windows;
        }
        return windows.concat(
            [array.slice(index, index + windowSize)]
        );
    }, []);
}

module.exports = romanToInteger;
