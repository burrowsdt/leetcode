// Project Euler - Problem 1. Multiples of 3 or 5.

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

/**
 * @param {number} multiple1
 * @param {number} multiple2
 * @param {number} max
 * @return {number}
 */

var multiplesOf = function(multiple1, multiple2, max){
    let runningTotal = 0;
    for (let i = 0; i < max; i++){
        if (i % multiple1 === 0 || i % multiple2 == 0){
            runningTotal += i
        }
    }
    // console.log(runningTotal)
    return runningTotal
}

console.log(multiplesOf(3, 5, 1000))