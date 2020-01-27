/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

// declare a result string

//split the string into an array 

// declare an outer for-loop
// delcare an inner for-loop
// take a slice of the array from i(outer) to j (inner) and check for palindrome
// if you find a palindrome, and it's length is longer than result string, replace result string

// const longestPalindrome = (string) => {
//   string = string.toLowerCase();
//   let resultString = '';
//   let stringArray = string.split('');

//   for (let i = 0; i < stringArray.length; i++){
//     for(let j = 0; j < stringArray.length; j++){
//       let possiblePalindrome = stringArray.slice(i, j+1).join('')
//       if ((possiblePalindrome === possiblePalindrome.split('').reverse().join('')) && (possiblePalindrome.length > resultString.length)){
//         resultString = possiblePalindrome;
//       }
//     }
//   }

//   return resultString;
// }

const longestPalindrome = function(string) {
  let max = '';


  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < 2; j++) {

      let left = i;
      let right = i + j;

      while (string[left] && string[left] === string[right]) {
        left--;
        right++;


      }
      if ((right - left - 1) > max.length) {
        max = string.substring(left + 1, right);
      
      }
    }
  }
  return max;
};

console.log(longestPalindrome(`abcdefggfehijkkijeeeelmnopqqponm`))
