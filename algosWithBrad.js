/*
 We could have been so good together! 
*/

// LEVEL 2A
/*

Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.

Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2

*/

function countTimes(arr, val) {
  const obj = {};

  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] === val) {
      if(!obj[arr[i]]) {
        obj[arr[i]] = 1
      } else {
        obj[arr[i]] += 1;
      }
    }
  }
  return obj[val] || 0;
}

// console.log(countTimes([1,2,2,4,3,5], 2)) //=>  2

// function Count Times
// input : ARRAY, SEARCHVAL
// Output : Num of times SEARCHVAL appears in ARRAY


/*
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.

Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.

*/

// function wordSearchLetterCounter
// input:  NESTED_ARRAY, LETTER
// output: NUM times LETTER appears 

// iterate through the NESTED_ARRAY
  // for each inner-array, run countTimes function on each inner-array value to see if its our LETTER 

  function wordSearchLetterCounter(nested, value) {
    let count = 0;
    // console.log(nested)
    
    for (let i = 0; i < nested.length; i += 1) {
        // console.log(countTimes(nested[i], value))
        count += countTimes(nested[i], value);
    }

    return count;
  }

  
// console.log(wordSearchLetterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D")) //=> 3 


/*
define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

// function isPalindrome
// input: string
// output boolean

// split the input string on the char. 
// assuming no case or space i will reverse the string and compare to the input string
// return boolean 

function isPalindrome(str) {
  let result = false;
  let newString = str.split('').reverse().join('');
  
  if (newString === str) {
    result = true;
  }
  return result;
}

const isPalindrome2=(string)=> string === string.split('').reverse().join('')


// console.log(isPalindrome('racecar')) //=> true
// console.log(isPalindrome('starwars')) //=> false

/*
write a function that takes two strings and returns true if their lengths are the same, and false otherwise
*/

// function samesies
// input: string1, string2
// output:  boolean 
// compare two input strings to check if the length is the same.

const samesies = (str1, str2) => str1.length === str2.length;

// console.log(samesies('Hello', 'World')) //=> true
// console.log(samesies('Goodbye', 'Mars')) //=> false



/*
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.

example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
*/

// function memoryMaker
// input:  null
// output: function
  // returned function accepts a value
    // returns array of prev passed values. 

    function memoryMaker() {
      return function returnedFromFunc(val) {
        return [val];
      }
    }

const iRemember = memoryMaker();
iRemember('hello'); //-> ['hello']
iRemember(1); //-> ['hello', 1]
iRemember('world'); //-> ['hello', 1, 'world']
iRemember(true); //-> ['hello', 1, 'world', true]

const Erray = {
  erray: {},
  length: 0
}

Erray.push = function(value) {
  Erray.erray[Erray.length] = value
  Erray.length += 1;
  return Erray.length;
}

Erray.pop = function(){
  
  const popped = Erray.erray[Erray.length - 1];
  delete Erray.erray[Erray.length - 1]
  Erray.length -= 1;
  return popped;
  
  
}


Erray.push('Whats Up')
Erray.push('Hi Hi')
Erray.push('Hello!')
console.log(Erray.length) //=> 3

console.log(Erray.pop()) //=> 'Hello'