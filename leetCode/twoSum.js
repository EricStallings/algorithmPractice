/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// create a modifier variable to keep track of recursive calls. 
// shift the first element out of the array 
// loop over the remaining elements in the array and add them to the first element 
// if they add up to target, then return their positions in the original array using modifier 


// const twoSum = (array, target) => {
//   let modifier = 0;
//   let resultArray = [0, 0];

//   const helperFunc = (baseElement, array2, target2) => {
//     for (let i = 0; i < array2.length; i++){
//       if (baseElement + array2[i] === target2) {
//         console.log(`Got one!`)
//         resultArray[0] = modifier;
//         resultArray[1] = i+modifier;
//       } else {
//         modifier ++;
//         console.log(`modifier is :`, modifier)
//         baseElement = array2.shift();
//         // console.log(`Line 31, baseElement is ${baseElement}, array is ${array2}`)
//         helperFunc(baseElement, array2, target2)
//       }
//     }
//   }

//   helperFunc(array[0], array, target)

//   return resultArray;
// }


// const twoSum = function(nums, target) {


//   // iterate over the input array
//   // iterate over the input array in a nested loop 
//   // if two elements together add up to the target, return an array with index 0 being the index of the first el, and index 1 being the index of the second el. 

//   for (let i = 0; i < nums.length; i++ ){
//     for (let j = 1; j < nums.length; j++){
//       if (nums[i] === nums[j]) continue;
//       if (nums[i] + nums[j] === target){
//         return [i,j]
//       }
//     }
//   }
// };


// twoSum with a While Loop

const twoSum = (array, target) => {
  let i = 0;
  let j = i+1;
  while (j < array.length){
    if (array[i] + array[j] === target){
      return [i , j]
    } else {
      j++
    }

    if (j === array.length){
      i++; 
      j = i + 1;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)) // => [0,1]
console.log(twoSum([3,3], 6)) // => [0,1]
console.log(twoSum([2, 5, 5, 1], 10)) // => [1,2]