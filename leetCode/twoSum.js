/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/



// twoSum with a While Loop

const twoSum = (array, target) => {
  let i = 0;
  let j = i + 1;

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


const twoSum2 = function(nums, target) {

  const trackerObj = {};

  for(let i=0; i<nums.length; i++){
    console.log(`Tracker Object: `, trackerObj)
    // console.log(`nums[${i}]: `, nums[i])
      if(trackerObj[nums[i]]>=0){
        console.log(`${trackerObj[nums[i]]} is greater than or equal to 0`)
          return [ trackerObj[nums[i] ] , i]
      }
      // console.log(`tracker object at ${target-nums[i]} = ${i}`)
      trackerObj[target-nums[i]] = i
      console.log(`----------------`)
  }
};

// console.log(twoSum([2, 7, 11, 15], 9)) // => [0,1]
// console.log(twoSum([3,3], 6)) // => [0,1]
console.log(twoSum2([2, 1, 13, 7, 20, 54, 9, 98], 100)) // => [1,2]

/*
Here's the breakdown! 
  1. Create a tracker object. This object will have key/value pairs in this format: 
      <'THE DIFFERENCE BETWEEN THE TARGET AND CURRENT ELEMENT'> : <The index of the current element>
  Example: Target = 100, array[0] = 2. 
  trackerObj['98'] = 0. 

  2. First IF (base case) statement: 
    If trackerObj[nums[i]] > = 0, return final array: [ trackerObj[nums[i]] , i].
    The reason: If trackerObj[nums[i]] exists, that means that trackerObj[nums[i]]'s counterpart, exists. 

  3. in all cases, trackerObj[target-nums[i]] = i. 

  For the example array [2, 5, 5, 1, 13, 98] and target 100
  trackerObj is { '87': 4 (100 - 13 : index of 13), '95': 2 (100-5 : index of 5), '98': 0 (100-2), '99': 3 }
*/
