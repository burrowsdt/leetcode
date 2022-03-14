// 71. Simplify Path

/**
 * @param {string} path
 * @return {string}
 */

// Solution 1

// Runtime: 108 ms, faster than 40.70% of JavaScript online submissions for Simplify Path.
// Memory Usage: 44.8 MB, less than 19.04% of JavaScript online submissions for Simplify Path.

var simplifyPath = function (path) {
    let arr = path.replace(/\/\//, "/").split("/")

    // console.log(arr)

    let finalArr = [];

    for (section of arr){
        if (!section){
            continue
        } else if (section === "."){
            continue
        } else if (section === ".."){
            finalArr.pop()
        } else {
            finalArr.push(section)
        }
    }
     
    let finalStr = "/"
    finalStr = finalStr.concat(finalArr.join("/"))

    return finalStr
}


console.log(simplifyPath("/../"))
console.log(simplifyPath("/home/"))
console.log(simplifyPath("/home//foo/"))
console.log(simplifyPath("/a/./b/../../c/"))