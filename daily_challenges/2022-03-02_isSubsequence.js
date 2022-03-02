// 392. Is Subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution #1 -- really good runtime! not great memory
//  Runtime: 68 ms, faster than 85.91% of JavaScript online submissions for Is Subsequence.
//  Memory Usage: 44.3 MB, less than 5.04% of JavaScript online submissions for Is Subsequence.

var isSubsequence = function(s, t) {
    if (s.length === 0){
        return true
    }
    
    let sIndex = 0;
    for (letter of t){
        // console.log(letter)
        if (letter === s[sIndex]){
            sIndex++
            if (sIndex === s.length){
                return true
            }
        } 
    }
    return false
};


// console.log(isSubsequence(s = "abc", t = "ahbgdc"))
// console.log(isSubsequence(s = "axc", t = "ahbgdc"))
// console.log(isSubsequence("","ahbgdc"))

