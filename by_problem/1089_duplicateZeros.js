// #1089 - Duplicate zeros
// 88 ms (beats 69.21%); 38.6 MB;
// In retrospect, this is unnecessarily redundant; I would take out lines 12 through 16 and modify the remaining to handle the pop/splice upon finding a 0, rather than finding the zeros and then running through them in a second operation

var test1 = [1,0,2,3,0,4,5,0];
var test2 = [1,2,3];

var duplicateZeros = function(arr) {
    let zeroLocations = [];
    
    arr.forEach(function(value, index){
        if (value === 0){
            zeroLocations.push(index);
        }
    });
    
    let shiftCount = 0;
    zeroLocations.forEach(function(value, index){
        arr.splice(value + shiftCount, 0, 0);
        shiftCount++
        arr.pop();
    });
};