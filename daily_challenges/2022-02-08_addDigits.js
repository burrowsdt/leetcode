// 258. Add Digits
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

/**
 * @param {number} num
 * @return {number}
 */

// Solution 1 - simple while loop. Decent runtime, not great memory usage.
// Runtime: 118 ms, faster than 41.19% of JavaScript online submissions for Add Digits.
// Memory Usage: 44.6 MB, less than 5.78% of JavaScript online submissions for Add Digits.

var addDigits = function(num) {
    if (String(num).length === 1) {
        return num
    }
    
    var digitArray = String(num).split("")

    while (digitArray.length !== 1) {

        let currSum = digitArray.reduce((prevValue, currValue) => Number(prevValue) + Number(currValue));

        digitArray = String(currSum).split("")
    }

    return Number(digitArray[0])

};

// Test 1
console.log(addDigits(num = 38))
console.log(addDigits(num = 0))
console.log(addDigits(355))
