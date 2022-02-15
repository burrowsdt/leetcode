// Binary tree constructor based on complete array (allows for nulls as leafs)
// Create new instance of TreeNode, then pass array via insert. 

class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class TreeNode {
  constructor() {
      this.root = null;
  }

  insert(values) {
      // clear current children before insert
      if (this.root === null) {
          this.root = new Node(values[0])
      }
      values.shift()

      this.left = this.right = null;

      const queue = [this.root];
      for (var i = 0; i < values.length;) {
          const current = queue.shift();
          for (let side of ["left", "right"]) {
              if (i < values.length && values[i] !== null) {
                  current[side] = new Node(values[i]);
                  queue.push(current[side]);
              }
              ++i;
          }
      }
      return this;
  }
}

// let newTree = new TreeNode()
// console.log(newTree)
// newTree.insert([1,2,null,3])
// console.log(newTree)

export {Node, TreeNode};