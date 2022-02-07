// 454. 4Sum II

// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

//     0 <= i, j, k, l < n
//     nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let numsArray = [nums1, nums2, nums3, nums4];
    var totalTuples = 0;

    // Initial test for all zeroes, all -, all +
    
    var allZeroes = false;
    
    numsArray.forEach(function(arr) {
        let uniqueValues = [...new Set(arr)];
        console.log(uniqueValues)
        if(uniqueValues.length == 1 && uniqueValues[0] == 0) {
            allZeroes = true;
        } 
    })

    if (allZeroes == true) {
        console.log("All zeroes")
        return nums1.length ** 4
    }

    const cartesian = (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
    
    allCombos = cartesian(...numsArray);
    console.log(allCombos.length)
    allCombos.forEach(function(combo){
        if (combo.reduce(function(total, num){
            return total + num
        }) == 0) {
            console.log(`Combo = ${combo}`)
            totalTuples++
        }
    })
    return totalTuples
};


var testFourSum = function(nums1, nums2, nums3, nums4, output) {
    if (fourSumCount(nums1, nums2, nums3, nums4) === output) {
        console.log(`Test passed. Expected output = ${output}`)
    }
}

// // Test 1
// console.log(fourSumCount(nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]))
// testFourSum(nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2], output = 2)

// // Test 2
// console.log(fourSumCount(nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]))
// testFourSum(nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0], output = 1)

// // Test 3
// console.log(fourSumCount(
//     [1, 1, -1, -1],
//     [-1, -1, 1, 1],
//     [1, -1, 0, -1],
//     [1, 1, -1, 1]
// ))

// Test 4
// console.log(fourSumCount(
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// ))

// Test 5
console.log(fourSumCount(
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
))

let factorialize = function (num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

console.log(4 ** 4)