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

var addTwoNumbers = function(l1, l2) {
    
  let string1 = '';
  let string2 = '';

  let counter = l1;
  let counter2 = l2;

  while (counter){
    string1 += counter.val;
    counter = counter.next;
  }
  console.log(`Line 31, string1 is `, string1)
  while (counter2){
    string2 += counter2.val;
    counter2 = counter2.next;
  }
  // console.log(`String1 is ${string1} and String 2 is ${string2}`)

  let num1 = parseFloat(string1.split('').reverse().join(''))
  let num2 = parseFloat(string2.split('').reverse().join(''))
  console.log(`Line 40, num1 is `, num1)
    // console.log(`num1 is ${num1} and num2 is ${num2}`)

  let finalArray = ((num1 + num2).toString().split('').reverse());

  const resultLL = new ListNode(finalArray[0]);
  let resultCounter = resultLL;
  for (let i = 1; i < finalArray.length; i++){
    resultCounter.next = new ListNode(finalArray[i]);
    resultCounter = resultCounter.next
  }

  return resultLL;
};



const linkedList1 = new ListNode(2)
linkedList1.next = new ListNode(4);
linkedList1.next.next = new ListNode(3)
const linkedList2 = new ListNode(5)
linkedList2.next = new ListNode(6);
linkedList2.next.next = new ListNode(4)
console.log(addTwoNumbers2(linkedList1,linkedList2)); //=> '243', '564' //=> 342, 465 //=> 807 //=> 708 //=> ['7', '0', '8']


const bigArray = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
const bigLL = new ListNode(bigArray[0]);
let bigCounter = bigLL
for (let i = 1; i < bigArray.length; i++){
  bigCounter.next = new ListNode(bigArray[i]);
  bigCounter = bigCounter.next
  // console.log(`Iteration #`, i)
}
// console.log(bigLL)
const littleLL = new ListNode(5)
littleLL.next = new ListNode(6);
littleLL.next.next = new ListNode(4)
/*
ListNode {
  val: 5,
  next: ListNode { val: 6, next: ListNode { val: 4, next: null } }
}
*/
// console.log(addTwoNumbers2(bigLL,littleLL))


function addTwoNumbers2 (l1, l2){
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while(l1!==null||l2!==null||sum>0){
    console.log(`Started the While Loop. l1.val = ${l1.val}, l2.val = ${l2.val}, sum = ${sum}`)
      if(l1!==null){
          sum = sum + l1.val;
          l1 = l1.next;
      }
      if(l2!==null){
          sum = sum + l2.val;
          l2 = l2.next;
      }
      if(sum>=10){
        console.log(`${sum} is greater than/equal to 10.`)
          carry = 1;
          sum = sum - 10;
          console.log(`Carry: `, carry)
          console.log(`Sum: `, sum)
      }

      head.next = new ListNode(sum);
      head = head.next;

      sum = carry;
      carry = 0;

  }

  return List.next;
};