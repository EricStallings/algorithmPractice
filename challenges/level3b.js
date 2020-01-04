/* ********************************************* Problem A ********************************************* */

/*
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.

example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
*/

const memoryMaker = () => {
  const memory = [];
  return val => {
    memory.push(val);
    return memory;
  };
};

/* ********************************************* Problem B ********************************************* */

/*
Function that adds all elements in an array using recursion
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
example.
sumAllElements([1,2,3,4], 10) -> 20
Note: Do not use any native JS methods, or loops
*/

const sumAllElements = (arr, acc = 0, index = 0) => {
  if (index === arr.length) return acc;
  return sumAllElements(arr, acc + arr[index], index + 1);
};

/* ********************************************* Problem C ********************************************* */

/*
Create a function "fastCache" that takes one argument (a function) and returns a function. When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
example:
SINGLE ARGUMENT CASE
const multiplyBy2 = num => num * 2;
const cachedMultiplyBy2 = fastCache(multiplyBy2);
cachedMultiplyBy2(100); // -> 200
cachedMultiplyBy2(150); // -> 300
cachedMultiplyBy2(100); // -> 200 // from the cache object

MULTIPLE ARGUMENTS CASE
const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2);
const cachedSumMultiplyBy2 = fastCacheMult(sumMultiplyBy2);
cachedSumMultiplyBy2(5, 10); // -> 30
cachedSumMultiplyBy2(1, 2); // -> 6
cachedSumMultiplyBy2(5, 10); // -> 30 // from the cache object
*/

// Single argument fastCache
const fastCache = func => {
  const cache = {};
  return input => {
    if (!cache.hasOwnProperty(input)) cache[input] = func(input);
    return cache[input];
  };
};

// Multiple arguments fastCache
const fastCacheMult = func => {
  const cache = {};
  return (...args) => {
    const input = JSON.stringify(args);
    if (!cache.hasOwnProperty(input)) cache[input] = func(...args);
    return cache[input];
  };
};
