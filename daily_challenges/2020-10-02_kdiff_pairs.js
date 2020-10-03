// 2020.10.03, k-diff pairs in an array
// First solution: hammer approach, this is clunky and expensive -- Runtime: 348 ms, Memory Usage: 47 MB

Array.prototype.getUnique = function () { // from https://stackoverflow.com/a/17713187
    var u = {}, a = [];
    for (var i = 0, l = this.length; i < l; ++i) {
        if (u.hasOwnProperty(this[i])) {
            continue;
        }
        a.push(this[i]);
        u[this[i]] = 1;
    }
    return a;
}

var findPairs = function (nums, k) {
    let finalPairs = [];
    let sortedArray = nums.sort(function (a, b) {
        return a - b
    });

    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j] - sortedArray[i] == k) {
                finalPairs.push([sortedArray[i], sortedArray[j]]);
            }
        }
    }

    return finalPairs.getUnique().length;
}

findPairs(nums, k);

// Reviewing higher performing options, saw this use of Set() -- very efficient and putting here to remember to use Set similarly in the future

var findPairs = function(nums, k) {
    let uniquePairCount = 0
    const uniqueValues = new Set();
    const repeats = new Set();
    for (const num of nums) {
      if (uniqueValues.has(num)) {
        repeats.add(num);
        continue;
      }
  
      if (uniqueValues.has(num + k))  uniquePairCount += 1;
      if (uniqueValues.has(num - k))  uniquePairCount += 1
      uniqueValues.add(num);
    }
    if (!k) return repeats.size;
    return uniquePairCount;
  };