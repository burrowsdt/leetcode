// 605. Can Place Flowers
// 118 ms (26.72%) & 43.1 MB (5.5%) -- the great but not the worst! To speed up, probably get rid of the nested if/else and the new array.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    var flowers = 0;

    let newArr = [];

    for (let oI = 0; oI < flowerbed.length; oI++) {
        if (flowerbed[oI] === 0) {
                if (newArr[oI-1] !== 1 && flowerbed[oI+1] !== 1) {
                    flowers += 1;
                    newArr[oI] = 1;
                } else {
                    newArr[oI] = 0;
                }
            } else {
                newArr[oI] = 1;
            }
    }

    if (flowers >= n) {
        return true
    }

    return false
};

console.log(canPlaceFlowers(flowerbed = [1,0,0,0,1], n = 1))
console.log(canPlaceFlowers(flowerbed = [1,0,0,0,1], n = 2))
console.log(canPlaceFlowers(flowerbed = [1,0,0,0,0,1], n = 2))
console.log(canPlaceFlowers(flowerbed = [1,0,0,0,1,0,0], n = 2))