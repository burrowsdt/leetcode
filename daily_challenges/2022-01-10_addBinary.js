// 67. Add binary
// Runtime: 80 ms, faster than 76.15% of JavaScript online submissions for Add Binary.
// Memory Usage: 40.2 MB, less than 83.50% of JavaScript online submissions for Add Binary.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 
 var addBinary = function(a, b) {
    // convert binary string to integer
    var aInt = BigInt(`0b${a}`);
    var bInt = BigInt(`0b${b}`);

    // sum
    
    totalInt = aInt + bInt;

    // convert sum to binary
    
    return totalInt.toString(2)

    };

    // Test 1
    // console.log(addBinary(a = "11", b = "1"))
    // Test 2
    // console.log(addBinary(a = "1010", b = "1011"))

    // Test 3 - this was the only real hurdle, had to use BigInt() and the 0b prefix literal (with some guidance from other submissions!)

    // if (addBinary(
    //     a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    //     b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011") === "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
    // ) {
    //     console.log("Test 3 - All is well")
    // } else {
    //     console.log("Test 3 - No go")
    // }