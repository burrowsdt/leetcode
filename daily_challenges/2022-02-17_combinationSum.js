/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const result = [];
    for (const currentEle of candidates) {
      /**
       * Set is currentEle added to the current result;
       * [[],[a]] new is b
       * [[], [a], [b], [a,b]]
       * */
      const initialLength = result.length;
      for (let i = 0; i < initialLength; i++) {    
        result.push([...result[i], currentEle]);
      }
    }
    console.log(result)
    let finalResult = [];
    result.forEach(function(el){
        console.log(el)
        if (el.reduce((prevVal, currVal)=>prevVal+currVal) === target){
                finalResult.push(el)
        }
    })
    console.log(finalResult)
};

console.log(combinationSum(candidates = [2,3,6,7], target = 7))
// console.log(combinationSum(candidates = [2,3,5], target = 8))
// console.log(combinationSum(candidates = [2], target = 1))
// console.log(combinationSum(candidates = [2], target = 2))