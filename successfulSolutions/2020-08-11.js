// 2020-08-11.js
// h-index

/* 
  @param {number[]} citations
  @return {number}

var hIndex = function(citations) {
    
}; */

var testData = [[3,0,6,1,5], [10, 5, 8, 3, 4], [5, 8, 25, 3, 3]];

var testResults = [3, 4, 3];

var hIndex = function(citations) {
    citations.sort(function(a, b){return b-a}); // -> 6, 5, 3, 0, 1

    let counter = 0;
    
    for (i=0; i < citations.length; i++){
        if (citations[i] >= i+1){
            counter += 1;
        } else{
        break
        }
    } 

    return counter;
};

// test responses
testData.forEach(function(value, index){
    if (hIndex(testData[index]) == testResults[index]){
        console.log("Test Index " + index + " successful");
    } else {
        console.log("Test Index " + index + " failed");
    };
});