function isPalindrome(str){
        if (str.length === 1){
            return true;
        }
        if (str.length === 2){
         return str[0] === str[1];
        } 
        if (str[0]===str[str.length-1]){
            return isPalindrome(str.slice(1, -1))
        }
            return false
    }

// Function takes max num of digits

function largestPalProd(num) {
    let i = `9${"9".repeat(num-1)}`
    for (let i = `9${"9".repeat(num-1)}`; i >= `1${"0".repeat(num-1)}`; i--) {
        for (x = `9${"9".repeat(num-1)}`; x >= `1${"0".repeat(num-1)}`; x--) {
            let intToCheck = x * i
            if (isPalindrome(intToCheck.toString()) === true) {
                return x * i
            }
        }
    }
}

console.log(largestPalProd(4))

console.log()