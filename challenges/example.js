//input:  string,
//output: boolean value if string is palindrome
//1. compare apples to apples.  So make sure string is set to uppercase in case there's a letter that's in lower case.  -> create originalString variable. X
//2. eliminate non-letters (example commas) and spaces in order to compare the word or words -> use replace() with regEx on originalString X
//3. check if palindrome -> create reverseString by reversing originalString -> do split() to split up the word into individual letters, reverse() the letters, then join() the letters X
//4. check reverseString -> if palindrome, return true.  If not, false. X
function isPalindrome (string) {
  let originalString = string.toUpperCase().replace(/[|W_]/g, '');
  console.log('originalString uppercase & no spaces:', originalString)
  let reverseString = originalString.split('').reverse().join('');
  console.log('reverseString result:', reverseString)
  return reverseString === originalString ? true : false;
}
console.log(isPalindrome('level'));
console.log(isPalindrome('RACEC AR'));
console.log(isPalindrome('CAR'));

