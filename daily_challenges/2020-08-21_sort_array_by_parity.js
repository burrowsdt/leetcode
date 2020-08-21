// Sort array by parity, 2020-08-21

/* Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition. 

*/

// Time for below was very high - 138 ms, ~ 40 MB; had accidentally left a console.log statement
var testArray = [3,1,2,4]; // [2,4,3,1]

var sortArrayByParity = function (a) {
    let full = [];
    let odd = [];
    a.forEach(function(value, index){
        if (value % 2 === 0) {
            full.push(value);
        } else {
            odd.push(value);
        }
    })

    full.push.apply(full, odd);
    return full
};

// Removed console.log. More important, instead of using push.apply and then returning full, just returned a new array using spread: [...full, ...odd]
// New time: 120 ms; memory 38.7 MB

var sortArrayByParity = function (a) {
    let full = [];
    let odd = [];
    a.forEach(function(value, index){
        if (value % 2 === 0) {
            full.push(value);
        } else {
            odd.push(value);
        }
    })

    return [...full, ...odd];
};

// but between forEach and a for loop, a for loop is substantially faster -- 96 ms (though about the same memory usage, 38.9 MB) - this beats 63.75%

var sortArrayByParity = function (a) {
    let full = [];
    let odd = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            full.push(a[i]);
        } else {
            odd.push(a[i]);
        }
    }
    return [...full, ...odd];
};