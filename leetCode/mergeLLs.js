/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
// var mergeTwoLists = function(l1, l2) {
//   const List = new ListNode(0);
//   let head = List;
  
//   let round = 0;

//   while(l1 !== null || l2 !==null){
//       round += 1;
//       console.log(`Round ${round}`)
//       if (l1 !==null) {
//           head.next = new ListNode(l1.val);
//           l1 = l1.next;
//           head = head.next;
//       }
//       if (l2 !== null){
//           head.next = new ListNode(l2.val);
//           l2 = l2.next;
//           head = head.next
//       }
      
//   }
//   return List.next;
// };

const mergeTwoLists = (l1, l2) => {
  let nodeArray = [];
  
  while(l1 !== null || l2 !== null){
      if (l1!== null){
          nodeArray.push(l1.val)
          l1 = l1.next
      }
       if (l2!== null){
          nodeArray.push(l2.val)
          l2 = l2.next
      }
  }
  nodeArray = nodeArray.sort((a,b) => a-b)
  const finalList = new ListNode(0);
  let head = finalList;

  for (let i = 0; i < nodeArray.length; i++){
    head.next = new ListNode(nodeArray[i]);
    head = head.next
  }
  return finalList.next
}

const list1 = new ListNode(1);
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

const list2 = new ListNode(1);
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

console.log(list1)
console.log(list2)

console.log(mergeTwoLists(list1, list2))