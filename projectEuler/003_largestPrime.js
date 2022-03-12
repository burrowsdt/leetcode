// Project Euler Problem 3 - Largest Prime of 600851475143

function isPrime(num) { // took the prime algorithm from wiki 
    if (num <= 3) return num > 1;

    if ((num % 2 === 0) || (num % 3 === 0)) return false;

    let count = 5;

    while (Math.pow(count, 2) <= num) {
        if (num % count === 0 || num % (count + 2) === 0) return false;

        count += 6;
    }

    return true;
}

// console.log(isPrime())

function largestPrime(num){
    let factors = [];
    let result;
    let maxDivisor = Math.sqrt(num);
    
    // Get factors
    for (let i = 0; i < maxDivisor; i++){
        if (num % i === 0 && factors.includes(num / i) === false){
            factors.push(i)
            factors.push(num/i)
        }  
    }
    console.log(factors.sort((a,b)=>b-a))

    for (x of factors.sort((a,b)=>b-a)){
        if (isPrime(x)){
            result = x;
            break
        }
    }
    
    return result
}

console.log(largestPrime(600851475143))