// 2020-08-26, Fizz Buzz
// Beats 94.21 in speed (72 ms) but only 35.99% of memory (39 MB)

var test = 15;

var fizzBuzz = function(n) {
  let integerArray = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      integerArray.push("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      integerArray.push("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      integerArray.push("FizzBuzz");
    } else { 
    integerArray.push(String(i));
    }
  }
  return integerArray;
};

fizzBuzz(test);

// Do small things matter? Altering the FizzBuzz criteria -- it seems like, at least here, the difference is negligible (according to jsbench.me)

var fizzBuzz = function(n) {
  let integerArray = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      integerArray.push("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      integerArray.push("Buzz");
    } else if (i % 15 === 0) {
      integerArray.push("FizzBuzz");
    } else { 
    integerArray.push(String(i));
    }
  }
  return integerArray;
};

fizzBuzz(test);