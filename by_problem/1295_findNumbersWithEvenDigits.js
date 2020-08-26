// Problem 1295, Find Numbers with Even Number of Digits
// 84 ms, beats 41.19%; 36.6 MB memory, beats 74.03;
var testArray = [1, 20, 300, 554, 1268, 35555, 666666];

var findNumbers = function (nums) {
    var countEvens = 0;
    nums.forEach(function (value, index) {

        var numDigits = Math.log10(value) + 1;
        if (Math.floor(numDigits) % 2 === 0) {
            countEvens++
        }

    })
    return countEvens;
};

findNumbers(testArray);

// A for loop does not appear faster here - below is 124 ms, 37.1 MB

/* var findNumbers = function (nums) {
    var countEvens = 0;
    for (let i = 0; i < nums.length; i++){
        let numDigits = Math.log10(nums[i]) + 1;
        if (Math.floor(numDigits) % 2 === 0) {
            countEvens++;
        }
    }
    return countEvens;
};
 */

 