// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution #1: simple forEach with a hashtable tracker. Pretty good runtime, less good memory.
// Runtime: 123 ms, faster than 41.05% of JavaScript online submissions for Single Number.
// Memory Usage: 46.8 MB, less than 14.71% of JavaScript online submissions for Single Number.

var singleNumber = function(nums) {
    let tracker = {};
    nums.forEach(function(val){
        if (!tracker[val]) {
            tracker[val] = 1
        } else 
        if (tracker[val] === 1){
            delete tracker[val]
        }
    })
    return Object.keys(tracker)[0]    
};

console.log(singleNumber(nums = [2,2,1]))
console.log(singleNumber(nums = [4,1,2,1,2]))
console.log(singleNumber(nums = [1]))

