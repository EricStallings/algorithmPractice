// // // console.log("Hello BRAD!");
// // /*

// // Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

// // */

// // // EX:
// // // nums = [-1,0,3,5,9,12], target = 9   =>  4

// // // iterate over the array and check if i is equal to TARGET if so return i else -1


// // const findTarget = (array, target) => {
// //   for (let i = 0; i < array.length; i++){
// //     if (array[i] === target) return i
// //   }
// //   return -1
// // }


// // // Would you like to refactor this?
// //   const findTarget2 = (array, target)=> {
// //     // declare lo, hi vars
// //   let lo = 0;
// //   let hi = array.length-1
// //   let round = 1;
// //   while (lo < hi){
// //     console.log(`Round ${round} :`)
// //     round++
// // 		let mid = lo + Math.floor((hi-lo +1) /2)
// //     console.log(`Mid Index is now `, mid)
// //   	if (target < array[mid]) {
// //       console.log(`Changing hi...`)
// // 			hi = mid - 1
// //          console.log(`Hi is now ${hi}`)
// // 		} else {
// //       console.log(`Changing lo...`)
// // 			lo = mid; 
// //             console.log(`lo is now ${lo}`)
// // 		}
  
// //   }
// //       return array[lo]==target?lo:-1;

// // }


// // // console.log(findTarget2([-1,0,3,5,9], 5)) //=> 4



// // /*
// // Given a sorted linked list, delete all duplicates such that each element appear only once.
// // Example 1: 

// // 1 -> 1-> 2
// // output
// // 1-> 2

// // Example 2 : 
// // Input: 1->1->2->3->3
// // Output: 1->2->3

// // */


// // function ListNode(val) {
// // 	this.val = val;
// // 	this.next = null;
// // }

// // // const list1 = new ListNode(1)
// // // list1.next = new ListNode(1)
// // // list1.next.next = new ListNode(2)

// // const list2 = new ListNode(1)
// // list2.next = new ListNode(1)
// // list2.next.next = new ListNode(2)
// // list2.next.next.next = new ListNode(3)
// // list2.next.next.next.next = new ListNode(3)

// // // list1 should havea head.  while curr = this.head while(curr) curr = curr.next;


// // function removeDupes(head){
// // 	if (head === null) return null;
// //   let current = head;
// //   while (current !== null) {
// //   	while (current.next !== null && current.val === current.next.val) {
// //     	  current.next = current.next.next;
// //     	}
// //     current = current.next;
// //     }
  
// //     return head;
// //   }



// // // console.log(removeDupes(list1))







  
// // //    Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.


// // // Input: head = [4,5,1,9], node = 5
// // // Output: [4,1,9]
// // // Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.



// // // function will start at head of list,
// // // 	 establish a target value,
// // // 	while there is a head, look at next val to see if it is the target
// // // 	 if the next val is the target, curr val - next.next.
// // // return the list

// // function deleteVal(head, target) {
// //   if (!head) return null;
  
// // 		let curr = head;
// //   while (curr.next) {
// //     if (curr.next.val === target) {
// //       curr.next = curr.next.next
// //     }
// //     curr = curr.next
// //   }
// //   return head;
// // }



// // function Node(val) {
// //   this.val = val;
// //   this.next = null;
// // }

// // const list1 = new Node(4)
// // list1.next = new Node(5)
// // list1.next.next = new Node(1)
// // list1.next.next.next = new Node(9)
// // console.log("my list", list1)

// // console.log("running", deleteVal(list1,1)) //=> [4,1,9]


// // Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

// // Assume a BST is defined as follows:

// // The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// // The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// // Both the left and right subtrees must also be binary search trees.

// // For example:
// // Given BST [1,null,2,2],  => return [2].



// const findDupes = (binaryTree) =>{
//   const cache = {};
//   let node = binaryTree; 
  
//   function traverseNode(node){
//     if (cache[node.val]) cache[node.val] += 1;
//     if (!cache[node.val]) cache[node.val] = 1;
//     if (node.left) traverseNode(node.left)
//     if (node.right) traverseNode(node.right)
//   }
  
//   traverseNode(binaryTree);
  
//   let count = 0;
//   let mode = 0;
// 	for (let key in cache){
//     if (cache[key] > count){
//       count = cache[key]
//       mode = key
//     }
//   }
  
//   return parseInt(mode);
// }


// function Node(val){
//   this.val = val;
//   this.left = null;
//   this.right = null;
// }

// const myBST = new Node(5)
// myBST.left = new Node(3)
// myBST.left.right = new Node(4)
// myBST.right = new Node (7)
// myBST.right.left = new Node(6)
// myBST.right.right = new Node(6)

// console.log(findDupes(myBST))








/* Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

Example 1: 

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 
Example 2:

Input: arr = [1,2]
Output: false

*/

// make a cache 
// check each value in cache,
// if value hasnt been so before, return true
function uniqueOcc(arr) {
  const cache = {};

  for (let i = 0; i < arr.length; i += 1) {
    if (!cache[arr[i]]) {
      cache[arr[i]] = 1
    } else {
      cache[arr[i]]++
    }
  }
  const valueArray = Object.values(cache);
console.log(valueArray)

  for (let i = 0; i < valueArray.length; i += 1) {
    for (let j = i+1; j < valueArray.length; j+=1){
      console.log(`Comparing ${valueArray[i]} to ${valueArray[j]}`)
      if (valueArray[i] === valueArray[j]) return false
    }
  }
  
  return true;
}






console.log(uniqueOcc([1,2,2,1,1,3])) //=> True
console.log(uniqueOcc([1,2,1, 2, 2, 2, 3, 3])) //=> False

