var lengthOfLongestSubstring = function(string) {
    // variable for the letter that starts the substring
    // counter variable for when we see that letter again
    // once we do see the letter again, psuh the counter variable into an array for comparison
    // reset the counter variable
    
    // loop through the array and find the max number. 
    const resultsArray = [];
    let currentLetter;
    let nextLetter;
    let startingLetter = string[0];
    let counter = 1; 
    
    for (let i = 0; i < string.length; i++){
      currentLetter = string[i];
      nextLetter = string[i+1];

      if (currentLetter !== startingLetter && currentLetter ) {
          resultsArray.push(counter);
          // currentLetter = string[i];
          counter = 1;
      } else {
          counter += 1;
          // console.log(`Current length is: ${counter}`)
      }

    }
    
   console.log(resultsArray)
};

const testCase = "abcabcbb"; //=> 3 (abc)
const testCase2 = 'bbbbbbbb' //=> 1 (b)
const testCase3 = "pwwkew" //=> 3 "wke"

console.log(lengthOfLongestSubstring(testCase)) 
console.log(lengthOfLongestSubstring(testCase2))
console.log(lengthOfLongestSubstring(testCase3))