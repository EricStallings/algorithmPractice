/*
Given an array arr[] of N integers and an integer X, the task is to find three integers in arr[] such that the sum is closest to X.

Examples:

Input: arr[] = {-1, 2, 1, -4}, X = 1
Output: 2
(-1) + 2 + 1 = 2
(-1) + 2 + (-4) = -3
2 + 1 + (-4) = -1
2 is closest to 1.



Input: arr[] = {1, 2, 3, 4, -5}, X = 10
Output: 9
*/

// Input: Array, an INT
// Output: closest SUM to the provided INT

//sort the input array
// declare a closestSum 
// Loop over the array and fix the first element of the possible triplet <arr[i]>
// initiate two pointers:
    // pointer1 = i+1 
    // pointer2 = n-1
// get the sum of first element and two pointers
// if the sum is smaller than the target, we increase pointer1
// else, if sum is bigger than target, decrease the pointer2 to reduce sum
// update closestSum

function tripletArray(array, target){
  let closestSum = Number.MAX_SAFE_INTEGER;
  const sortedArray = array.sort((a,b) => a-b);

  for (let i = 0; i < sortedArray.length; i++){
    let pointer1 = i+1;
    let pointer2 = sortedArray.length-1;
    let possibleSum = sortedArray[i] + sortedArray[pointer1] + sortedArray[pointer2];
    // console.log(`possibleSum: `, possibleSum)
    // console.log(`closestSum: `, closestSum)
    // if (possibleSum && (target -  possibleSum < target - closestSum) ) closestSum = possibleSum
    if (Math.abs(target-possibleSum) < Math.abs(target - closestSum)) closestSum = possibleSum;
    if (possibleSum > target) {
     pointer2 -= 1;
    } else {
      pointer1 += 1
    }
  }
  return closestSum;
}

console.log(tripletArray([-1, 2, 1, -4], 1))