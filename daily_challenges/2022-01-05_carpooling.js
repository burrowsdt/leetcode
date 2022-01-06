// Not great in time or memory use - more elegant and efficient might be nested arrays and sort, like this taken from a solution:
// for (let [pass, begin, end] of trips) {
//   result.push([begin, pass]);
//   result.push([end, pass*(-1)]);
// }

// result.sort((a,b) => a[1] - b[1]);
// result.sort((a,b) => a[0] - b[0]);

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

// // example 1
// carPooling(trips = [[2,1,5],[3,3,7]], capacity = 4)

// //example 2
// carPooling([[2,1,5],[3,3,7]], capacity = 5)

var carPooling = function (trips, capacity) {
  var currentPassengers = 0;
  var tracker = {};
  var result = true;

  // construct tracker object
  trips.forEach(function (trip, index) {
    if (!(trip[1] in tracker)) {
      tracker[trip[1]] = { addPass: 0, minusPass: 0 }
    }

    if (!(trip[2] in tracker)) {
      tracker[trip[2]] = { addPass: 0, minusPass: 0 }
    }

    tracker[trip[1]].addPass += trip[0]

    tracker[trip[2]].minusPass += trip[0]

  });

  // console.log(tracker)

  // tabulate tracker object
  for (let mile in tracker) {
    currentPassengers -= tracker[mile].minusPass
    currentPassengers += tracker[mile].addPass
    if (currentPassengers > capacity) {
      console.log(`Capacity overload at mile ${mile}`)
      result = false
    }
    console.log(`mile = ${mile}; currentPassengers = ${currentPassengers}`)
  }

  return result

}

// Test cases
// console.log(carPooling(trips = [[2, 1, 5], [3, 3, 7]], capacity = 4))
// console.log(carPooling(trips = [[2, 1, 5], [3, 3, 7]], capacity = 5))