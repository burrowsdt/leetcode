// 2021-12-27 - Challenge 476 (easy) - number complement

// Given a number, change to its binary complement
// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.

// To change number to binary, use integer.toString(2)

// /**
//  * @param {number} num
//  * @return {number}
//  */

var findComplement = function(num) {
    let splitBin = num.toString(2).split("")
    let complementArray = splitBin.map(function(int){
        if (int == 0) {
            return int = 1
          } else {
            return int = 0
          }
    })
    return parseInt(complementArray.join(""), 2)
};

// test case function

var testFindComplement = function() {
    if (findComplement(5) === 2) {
        console.log(`Passed test #1 -- input: 5; output: ${findComplement(5)}`)
    } else {
        console.log(`Failed test #1 -- input: 5; output: ${findComplement(5)}`)
    }
    if (findComplement(1) === 0) {
        console.log(`Passed test #2 -- input: 1; output: ${findComplement(1)}`)
    } else {
        console.log(`Failed test #2 -- input: 1; output: ${findComplement(1)}`)
    }
}

testFindComplement()