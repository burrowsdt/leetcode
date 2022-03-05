// 231. Power of Two
// Using to practice recursion

// Solution #1: 
// Runtime: 106 ms, faster than 51.71% of JavaScript online submissions for Power of Two.
// Memory Usage: 44 MB, less than 10.88% of JavaScript online submissions for Power of Two.

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    let test = 1;
    let finalAnswer = false;
    function helperMethod(n){
        if (test === n){
            finalAnswer = true
            return
        } else if (test > n) {
            return
        } else {
            test *= 2
            helperMethod(n)
        }
    }
    helperMethod(n)
    return finalAnswer
};

console.log(isPowerOfTwo(4))