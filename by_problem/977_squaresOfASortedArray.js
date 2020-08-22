// 977 - Squares of a Sorted Array
// 120 ms, beats 72.51; 42.9 MB, beats 77.35%

var test1 = [-4,-1,0,3,10];
var test2 = [-7,-3,2,3,11];

var sortedSquares = function(A) {
    let finalArray = [];
    
    A.forEach(function(value, index){
        finalArray.push(value*value);
    });

    return finalArray.sort(function(a, b) {return a-b});
};

sortedSquares(test1);

sortedSquares(test2);

// with for loop -- not faster when run through leetcode, faster on jsbench.me (but there I only ran two tests)

var sortedSquares = function(A) {
    let finalArray = [];
    
    for (let i = 0; i < A.length; i++){
        finalArray.push(A[i] * A[i]);
    };

    return finalArray.sort(function(a, b) {return a-b});
};
