// 290. Word Pattern
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

// Initial results: 167ms, 40MB, better than 5% on each -- yuck!
// Current: 126 ms (7.44%), 39.9 mb (5.79%), will review other solutions

var wordPattern = function(pattern, s) {
    s = s.split(' ');
    if (pattern.length !== s.length) {
        return false;
    }
    
    let first = {};
    let second = {};
    
    for (let i = 0; i < pattern.length; i += 1) {
        if (first[s[i]] !== second[pattern[i]]) {
            return false;
        }
        first[s[i]] = i;
        console.log(first[s[i]])
        second[pattern[i]] = i;
        console.log(second[pattern[i]])
    }
    return true;
};

// var wordPattern = function (pattern, s) {
//     let patternArray = pattern.split("");
//     let wordArray = s.split(" ");

//     if (patternArray.length != wordArray.length || new Set(patternArray).size != new Set(wordArray).size) {
//         return false
//     }

//     let patternDictionary = {};

//     for (let i = 0; i < patternArray.length; i++) {
//         let p = patternArray[i];
//         let w = wordArray[i];
//         // add to dic if not present and continue
//         if (p in patternDictionary == false) {
//             patternDictionary[p] = w;
//             console.log(`Added ${p} = ${w} to dic`)
//             continue
//         }
//         // check for match and continue
//         else if (patternDictionary[p] == w) {
//             console.log(`${p} exists: ${patternDictionary[p]} and is a match!`)
//             continue
//         } else if ( // check for mismatch and break if present
//             patternDictionary[p] != w
//         ) {
//             console.log(`Mismatch! ${p} != ${w}. ${p} already set to ${patternDictionary[p]}`)
//             return false
//             break;
//         }
        
//     }
//     return true
// };

// wordPattern(pattern = "abba", s = "dog cat cat fish")

console.log(wordPattern(pattern = "abba", s = "dog cat cat dog"))
// console.log(wordPattern(pattern = "abba", s = "dog cat cat fish"))
// console.log(wordPattern(pattern = "aaaa", s = "dog cat cat dog"))
// console.log(wordPattern(pattern = "abba", s = "dog dog dog dog"))
// console.log(wordPattern(pattern = "aaa", s = "aa aa aa aa"))