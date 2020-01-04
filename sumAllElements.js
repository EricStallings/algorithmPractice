/*
Function that adds all elements in an array using recursion
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
example.
sumAllElements([1,2,3,4], 10) -> 20
Note: Do not use any native JS methods, or loops
*/

function sumAllElements (arr, initial) {
  let count = 0;
  function helper(arr, acc) {
    console.log('Line 12: Made into helper')
    
    if (count === arr.length){
      console.log('Line 15: Entered IF')
      return acc;
    } 
    else {
      console.log('Line 19: Entered ELSE')
      console.log('recursive count -> ', count)
      acc += arr[count];
      count++;
      return helper(arr, acc);
    }
  }
  return helper(arr, initial);
}

console.log(sumAllElements([1,2,3,4], 10)) // -> 20