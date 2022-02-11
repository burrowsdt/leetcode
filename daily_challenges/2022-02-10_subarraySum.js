// 560. Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

// Passes all tests but too long. Need to implement a prefix sum solution. 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    
    let totalPairs = 0;

    for (let i = 0; i < nums.length; i++) {
        var currentSum = 0;
        
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j]
            if (currentSum === k) {
                totalPairs++
            } 
            
         }

    }

    return totalPairs

};