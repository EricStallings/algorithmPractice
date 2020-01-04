/* ********************************************* Problem A ********************************************* */

/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

Example:
const isOdd = num => num % 2 === 1
const oddCounter = checkerLogger(isOdd);
oddCounter(); ->  { true: 0, false: 0 }
oddCounter(3); -> true
oddCounter(2); ->  false
oddCounter(); -> { true: 1, false: 1 }
*/

const checkerLogger = checkerFn => {
  const countObj = { true: 0, false: 0 };
  return (...args) => {
    if (args.length) {
      const boolValue = checkerFn(...args);
      if (boolValue) countObj.true++;
      else countObj.false++;
      return boolValue;
    }
    return countObj;
  };
};

/* ********************************************* Problem B ********************************************* */

/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.

Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/

const countChar = (string, target, count = 0, i = 0) => {
  if (i === string.length) return count;
  if (string[i] === target) count++;
  return countChar(string, target, count, ++i);
};

/* ********************************************* Problem C ********************************************* */

/*
Write a function "passwordSafe" that takes two arguments: a string which will be the password, and a value which will be the "safe".
"passwordSafe" should return a function that takes in a password as a string.
If that password doesn’t match the one originally provided, return the string “You have entered the wrong password”. If the passwords do match, return the safe.

Example:
const mySafe = passwordSafe('myPassword', 'My Super Secret');
mySafe('wrongPassword') -> "You have entered the wrong password"
mySafe('myPassword') -> "My Super Secret"
*/

const passwordSafe = (password, safe) => passwordGuess => {
  if (passwordGuess === password) {
    return safe;
  }
  return 'You have entered the wrong password';
};
