// Project Euler - Problem 5 -- Smallest Multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// Fine solution but could probably use recursion to streamline; 

function smallestMultiple(mult){
    function divByMultiple(num, mult){
        for (i = mult; i > 1; i--){
            if (num % i != 0){
                return false
            }
        }
        return true
    }

    let breaker = false;
    let startCounter = mult
    while (breaker === false){
        if (divByMultiple(startCounter, mult)===true){
            return startCounter
        }
        startCounter += mult
    }
}


console.log(smallestMultiple(20))