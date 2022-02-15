// Binary tree constructor based on complete array (allows for nulls as leafs)

import {Node, TreeNode} from '../structures/binaryTree.mjs'

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class TreeNode {
//     constructor() {
//         this.root = null;
//     }

//     insert(values) {
//         // clear current children before insert
//         if (this.root === null) {
//             this.root = new Node(values[0])
//         }
//         values.shift()

//         this.left = this.right = null;

//         const queue = [this.root];
//         for (var i = 0; i < values.length;) {
//             const current = queue.shift();
//             for (let side of ["left", "right"]) {
//                 if (i < values.length && values[i] !== null) {
//                     current[side] = new Node(values[i]);
//                     queue.push(current[side]);
//                 }
//                 ++i;
//             }
//         }
//         return this;
//     }
// }

// const myTree = new TreeNode();
// console.log(myTree)
// myTree.insert([3,9,20,null,null,15,7]);
// console.log(myTree);

var minDepth = function(root) {
    const constructedTree = new TreeNode();
    constructedTree.insert(root)
    
    if (!root) return 0
    
    let stack = [];
    let visited = new Map();
    let currentLow;
    
    stack.push({node:constructedTree.root, height:1})
    
    while (stack.length){
        const {node, height} = stack.pop()
        if (visited.has(node)) continue
        visited.set(node, true)
        
        if (!node.left && !node.right) {
            if (height < currentLow || !currentLow ){
                currentLow = height;
            }
            continue
        }
        
        if (node.left) stack.push({node: node.left, height: height + 1})
        if (node.right) stack.push({node: node.right, height: height + 1})
    }
    
    return currentLow
  };

console.log(minDepth([3,9,20,null,null,15,7]))
console.log(minDepth([2,null,3,null,4,null,5,null,6]))