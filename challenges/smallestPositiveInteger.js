/*
This problem was asked by Amazon.

Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.

For example, for the input [1, 2, 3, 10], you should return 7.

Do this in O(N) time.
*/

function allSubsets(nums) {
  const result = [];
  const current = [];
  let finalSums = [];

  // function to recursively generate results
  (function generate(index) {
    // base case
    if (index === nums.length) return result.push(current.slice());

    // take it
    current.push(nums[index]);
    generate(index + 1);
    // leave it
    current.pop();
    generate(index + 1);
  })(0);

    result.forEach((el)=>{
      let sumToPush = 0;
      for (let i = 0; i < el.length; i++){
        sumToPush += el[i]
      }
      finalSums.push(sumToPush)
    })
    let finalSumsSorted = finalSums.sort((a, b) => a - b);
    // return finalSumsSorted
    let finalSumsObj = {};
    for (let j = 0; j < finalSumsSorted.length; j++){
      finalSumsObj[finalSumsSorted[j]] += 1
    }
 
    finalSumsSorted = Object.keys(finalSumsObj);

    for (let k = 0; k < finalSumsSorted.length; k++ ){
      if (finalSumsSorted[k] != k ){
        return k
      }
    }

}

console.log(allSubsets([1,2,3,10]))