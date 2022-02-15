// 111. Minimum Depth of a Binary Tree

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.
// Given the root of a binary tree, return its maximum depth.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Solution #1: Iterative solution based on someone's maximum depth solution. 
// Runtime: 288 ms, faster than 61.85% of JavaScript online submissions for Minimum Depth of Binary Tree.
// Memory Usage: 82.5 MB, less than 71.79% of JavaScript online submissions for Minimum Depth of Binary Tree.

 var minDepth = function(root) {
  if (!root) return 0
  
  let stack = [];
  let visited = new Map();
  let currentLow;
  
  stack.push({node:root, height:1})
  
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