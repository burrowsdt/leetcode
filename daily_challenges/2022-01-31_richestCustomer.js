// 1672. Richest customer wealth

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

/**
 * @param {number[][]} accounts
 * @return {number}
 */

// Soluton #1: Fast but a memory hog!
// Runtime: 60 ms, faster than 99.69% of JavaScript online submissions for Richest Customer Wealth.
// Memory Usage: 42.6 MB, less than 5.05% of JavaScript online submissions for Richest Customer Wealth.

//  var maximumWealth = function(accounts) {
//     let totals = [];
//     accounts.forEach(function(customer){
//         totals.push(customer.reduce((prev, curr) => prev + curr))
//     })
//     // console.log(totals.sort((a, b) => b-a))
//     return totals.sort((a,b) => b-a)[0]
// };

// // tests
// console.log(maximumWealth(accounts = [[1,2,3],[3,2,1]]))
// console.log(maximumWealth(accounts = [[1,5],[7,3],[3,5]]))
// console.log(maximumWealth(accounts = [[2,8,7],[7,1,3],[1,9,5]]))

// Solution #2: Even faster, but no better on memory!
// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Richest Customer Wealth.
// Memory Usage: 42.5 MB, less than 5.05% of JavaScript online submissions for Richest Customer Wealth.

// var maximumWealth = function(accounts) {
//     // let totals = [];
//     let totals = accounts.map(function(customer){
//         return customer.reduce((prev, curr) => prev + curr)
//     })
//     // console.log(totals.sort((a, b) => b-a))
//     return totals.sort((a,b) => b-a)[0]
// };

// tests
// console.log(maximumWealth(accounts = [[1,2,3],[3,2,1]]))
// console.log(maximumWealth(accounts = [[1,5],[7,3],[3,5]]))
// console.log(maximumWealth(accounts = [[2,8,7],[7,1,3],[1,9,5]]))

// Solution #3
// Runtime: 60 ms, faster than 99.69% of JavaScript online submissions for Richest Customer Wealth.
// Memory Usage: 42.2 MB, less than 5.05% of JavaScript online submissions for Richest Customer Wealth.

var maximumWealth = function(accounts) {
    var highestTotal;
    accounts.forEach(function(customer){
        let currentTotal = customer.reduce((prev, curr) => prev + curr)
        if (isNaN(highestTotal) == true) {
            highestTotal = currentTotal;
        } else {
            if (currentTotal > highestTotal) {
                highestTotal = currentTotal
            }
        }
    })
    // console.log(totals.sort((a, b) => b-a))
    return highestTotal
};

console.log(maximumWealth(accounts = [[1,2,3],[3,2,1]]))
console.log(maximumWealth(accounts = [[1,5],[7,3],[3,5]]))
console.log(maximumWealth(accounts = [[2,8,7],[7,1,3],[1,9,5]]))
