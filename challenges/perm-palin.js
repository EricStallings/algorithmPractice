/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 * 
 * Bonus: Solve in constant space complexity.
 */

/**
 * 1. Generate all permutations of string and check if each is palindrome
 * 
 * - Input = 'abc' -> ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'] => false
 * - Input = 'aab' -> ['aab', 'aba', 'baa'] => true ('aba')
 * 
 * Time Complexity: O(n!n)
 * Space Complexity: O(n!)
 */
const permPalin = (str) => {
  // if input is not a string
  if (typeof str !== 'string') return false;
  // if input is an empty string
  if (str === '') return true;


  // helper functions permute, isPalindrome, and swap
  const permute = (string, start) => {
    if (start === string.length - 1) return array.push(string);

    for (let i = start; i < string.length; i++) {
      string = swap(string, start, i);
      permute(string, start + 1);
      string = swap(string, start, i);
    }
  }

  const isPalindrome = string => {
    // sanitize string
    const newString = string.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    for (let i = 0; i < Math.floor(newString.length / 2); i++) {
      if (newString[i] !== newString[(newString.length - 1) - i]) return false;
    }

    return true;
  }

  const swap = (string, i, j) => {
    const arr = string.split('');
    [arr[j], arr[i]] = [arr[i], arr[j]];
    // console.log(`Line 58, new permutation: `,arr.join(''))
    return arr.join('');
  }

  // array to store permutations of string
  const array = [];

  // populate array with permutations
  permute(str, 0);
  console.log(array);

  // iterate through permutation array to find if any strings are palindromes
  for (let i = 0; i < array.length; i += 1) {
    if (isPalindrome(array[i])) return true
  }

  // if no palindrome detected in array, return false
  return false;

}

// console.log(permPalin('abc'));


/**
 * 2. Memoize string and check for appropriate number of odd occurences
 * 
 * - If string length is even, there should be no odd character frequencies
 * - If string length is odd, there should be one odd character frequency
 * 
 * - Memoized object examples
 * => { 'a': 2, 'b': 4, 'c': 1 } 
 *  - string length = 7 & one odd character frequency => true
 * => { 'd': 3, 'e': 5} 
 *  - string length = 8 & two odd character frequencies => false
 * => { 'f': 2, 'g': 4 }
 *  - string length = 6 & zero odd character frequencies => true
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 */
const permPalinII = str => {
  // if input is not a string
  if (typeof str !== 'string') return false;
  // if input is an empty string
  if (str === '') return true;

  const cache = {};

  // determine whether string length is even or odd
  const strLengthEven = str.length % 2 === 0;

  // populate cache with characters as keys,
  // and whether or not each character occurs an even (0) or odd (1) amount of times
  // - like bit flipping => 'b' occurs 5 times => {'b': 1}, 'a' occurs 4 times => {'a': 0}
  str.split('').forEach((char) => {
    cache[char] = cache[char] === 1 ? 0 : 1;
  });

  // calculates how many 1's exist as values in the object - the number of characters with odd frequencies
  const oddFreqChars = Object.entries(cache).reduce((a, b) => {
    return b[1] > 0 ? a + 1 : a
  }, 0)

  // if string length is even and no odd character frequencies => true
  // else if string length is odd and only one odd character frequency => true
  // else false
  if (strLengthEven && !oddFreqChars) return true;
  else if (!strLengthEven && oddFreqChars === 1) return true;
  else return false;

}

