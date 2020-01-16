/*
This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

// Problem 3
//
// This problem was asked by Google
//
// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string,
// and deserialize(s), which deserializes the string back into the tree.
//
// For example, given the following Node class
//
class TreeNode {
constructor(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
}
//
const node = new TreeNode(
  '1',
  new TreeNode('2', new TreeNode('3', new TreeNode('4'), new TreeNode('5')), new TreeNode('6'))
);

// expect(deserialize(serialize(node)).left.left.val).toEqual('left.left'); // Jest Testing
//
// https://leetcode.com/problems/serialize-and-deserialize-bst/
//
// Both serialize and deserialize functions:
// O(N) Time Complexity
// O(N) Space Complexity
// N is the number of nodes in the tree

// import TreeNode from '../Data-Structures/TreeNode';

// Serialize using level order traversal

/**
 * Returns the serialized string of a tree
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  let serializedString = '';
  if (root === null) return serializedString;

  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    console.log(queue)
    const node = queue.shift();

    if (node === null) {
      // console.log(`current node is null.`)
      // console.log(`serialized string is: `, serializedString)
      serializedString += '* '; // indicates null
    } else {
      // console.log(`current node: `, node)
      serializedString += `${node.val} `;
      // console.log(`serialized string is: `, serializedString)
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return serializedString;
}

console.log(serialize(node)); // Jest Testing


/**
 * Builds a tree out of a serialized string of a tree
 * @param {string} serializedString
 * @return {TreeNode}
 */
function deserialize(serializedString) {
  if (serializedString.length === 0) return null;
  const values = serializedString.split(' ');

  values.pop(); // the last value of values will have an empty string due to split

  const root = new TreeNode(values[0]);
  const queue = [];
  queue.push(root);

  for (let i = 1; i < values.length; i++) {
    const parentNode = queue.shift();

    if (values[i] !== '*') {
      const leftChild = new TreeNode(values[i]);
      parentNode.left = leftChild;
      queue.push(leftChild);
    }

    i++;

    if (values[i] !== '*') {
      const rightChild = new TreeNode(values[i]);
      parentNode.right = rightChild;
      queue.push(rightChild);
    }
  }

  return root;
}

// export { serialize, deserialize };