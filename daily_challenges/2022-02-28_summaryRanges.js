// 228. Summary Ranges

/**
 * @param {number[]} nums
 * @return {string[]}
 */

// Solution #1
//  Runtime: 77 ms, faster than 62.08% of JavaScript online submissions for Summary Ranges.
//  Memory Usage: 42.6 MB, less than 10.98% of JavaScript online submissions for Summary Ranges.

var summaryRanges = function (nums) {
    let currentRange = [];
    let allRanges = [];

    for (let i = 0; i < nums.length; i++) {
        let currentVal = nums[i];
        let nextVal = nums[i + 1]
        if (!currentRange[0] && currentRange[0] !== 0) {
            currentRange[0] = currentVal
            if (currentVal + 1 != nextVal) {
                currentRange[1] = currentVal
                allRanges.push(currentRange)
                currentRange = []
                continue
            }
            currentRange[1] = nextVal
            continue
        }
        if (currentVal + 1 != nextVal) {
            currentRange[1] = currentVal
            allRanges.push(currentRange)
            currentRange = []
        }
    }

    console.log(allRanges)
    let finalOutput = allRanges.map(function(range){
        if (range[0] === range[1]){
            return String(range[0])
        }
        let temp = `${range[0]}->${range[1]}`
        return temp
    })
    return finalOutput
};

//Solution #2 - better memory performance, worse runtime
// Runtime: 110 ms, faster than 19.36% of JavaScript online submissions for Summary Ranges.
// Memory Usage: 41.5 MB, less than 51.50% of JavaScript online submissions for Summary Ranges.

// var summaryRanges = function (nums) {
//     let currentRange = [];
//     let allRanges = [];

//     for (let i = 0; i < nums.length; i++) {
//         let currentVal = nums[i];
//         let nextVal = nums[i + 1]
//         if (!currentRange[0] && currentRange[0] !== 0) {
//             currentRange[0] = currentVal
//             if (currentVal + 1 != nextVal) {
//                 currentRange[1] = currentVal
//                 allRanges.push(String(currentVal))
//                 currentRange = []
//                 continue
//             }
//             currentRange[1] = nextVal
//             continue
//         }
//         if (currentVal + 1 != nextVal) {
//             currentRange[1] = currentVal
//             allRanges.push(`${currentRange[0]}->${currentRange[1]}`)
//             currentRange = []
//         }
//     }

//     return allRanges
// };

console.log(summaryRanges(nums = [0,1,2,4,5,7]))
console.log(summaryRanges(nums = [0,2,3,4,6,8,9]))
console.log(summaryRanges(nums=[-3, -2]))