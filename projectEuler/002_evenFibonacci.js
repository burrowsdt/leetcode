// Project Euler, Problem 2 - Even Fibonacci Numbers

// Function for testing even/odd
/**
 * 
 * @param {number} num 
 * @returns {string}
 */

var evenOddTest = function(num){
    if (num % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
}

// Function to get sum of all even/odd numbers in a fibonacci sequence
/**
 * 
 * @param {number} max 
 * @param {string} type 
 * @returns {number}
 */

var fibSum = function(max, type){
    let numTracker = [1, 2, 3];
    let runningTotal = 0;
    let maxHit = false;

    if (type === "even"){
        runningTotal += 2
    } else if (type === "odd") {
        runningTotal += 4
    }

    while (maxHit === false){
        numTracker.push(numTracker[1]+numTracker[2])
        numTracker.shift()
        if (numTracker[2] > max){
            maxHit = true;
            continue
        }
        if (evenOddTest(numTracker[2]) === type){
            runningTotal += numTracker[2]
        }
    }

    return runningTotal
}

// console.log(fibSum(4000000, "even"))