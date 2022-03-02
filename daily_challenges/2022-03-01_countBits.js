/**
 * @param {number} n
 * @return {number[]}
 */
// Solution #1 - super inefficient
// Runtime: 1977 ms, faster than 5.03% of JavaScript online submissions for Counting Bits.
// Memory Usage: 55.9 MB, less than 5.03% of JavaScript online submissions for Counting Bits.

// var countBits = function(n) {
//     let tempAns = Array.from(Array(n+1));
//     console.log(tempAns)
//     let ans = tempAns.map(function(el, index){
//         let bitString = index.toString(2).split("")
//         let oneCounter = 0;
//         for (let i of bitString){
//             if (i == 1){
//                 oneCounter++
//             }
//         }
//         console.log(bitString)
//         return oneCounter
//     })    
//     console.log(ans)
//     return ans
// };

// Solution 2 - Try creating the binary rep when the array is initalized using Array.from()
// This is slightly better, but not much:

// Runtime: 235 ms, faster than 10.62% of JavaScript online submissions for Counting Bits.
// Memory Usage: 73.3 MB, less than 5.03% of JavaScript online submissions for Counting Bits.

// var countBits = function(n) {
//     let tempAns = Array.from({length: n+1}, (v, i) => i.toString(2).split(""));
//     console.log(tempAns)
//     let ans = tempAns.map(function(el, index){
//         let oneCounter = 0;
//         for (let i of el){
//             if (i == 1){
//                 oneCounter++
//             }
//         }
//         return oneCounter
//     })    
//     console.log(ans)
//     return ans
// };

// Solution 3 - still a bit better but not great.
// Runtime: 249 ms, faster than 9.49% of JavaScript online submissions for Counting Bits.
// Memory Usage: 53.4 MB, less than 15.44% of JavaScript online submissions for Counting Bits.

var countBits = function(n) {
    let ans = [];
    for (let i = 0; i < n + 1; i++){
        let oneCounter = 0;
        let tempString = i.toString(2).split("");
        for (let int of tempString){
            if (int == 1){
                oneCounter++
            }
        }
        ans.push(oneCounter)
    }
    return ans    
};


console.log(countBits(n = 2))
// console.log(countBits(n = 5))