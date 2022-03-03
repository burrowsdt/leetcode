// 413. Arithmetic Slices
/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution #1 - wow, one of my best in overall performance, surprisingly! Main goal was to get this with only one array pass...
//  Runtime: 56 ms, faster than 98.15% of JavaScript online submissions for Arithmetic Slices.
//  Memory Usage: 41.8 MB, less than 45.56% of JavaScript online submissions for Arithmetic Slices.

var numberOfArithmeticSlices = function(nums) {
    let recentDiff;
    let currentLength = 0;
    let totalSlices = 0;
    for (let i = 0; i < nums.length-1; i++){
        let initDiff = nums[i+1]-nums[i]
        let secDiff = nums[i+2]-nums[i+1]
        if (initDiff === secDiff){
            totalSlices++
            if (recentDiff != undefined && initDiff == recentDiff){
                totalSlices += currentLength
                currentLength++
                console.log(currentLength)
            } else {
                currentLength = 1
                recentDiff = initDiff
                console.log(recentDiff)
            }
        } else {
            currentLength = undefined
            recentDiff = undefined
        }
        console.log(totalSlices)
    }
    return totalSlices
};
// console.log(numberOfArithmeticSlices([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]))
// console.log(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))
// console.log(numberOfArithmeticSlices([1,2,3,8,9,10]))
// console.log(numberOfArithmeticSlices(nums = [1,2,3,6,8,10]))
// console.log(numberOfArithmeticSlices(nums = [1]))
// console.log(numberOfArithmeticSlices([7,7,7,7]))
// console.log(numberOfArithmeticSlices([3,-1,-5,-9]))
// console.log(numberOfArithmeticSlices(nums = [1,2,3,100,5,7,9,11]))

// console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7]))