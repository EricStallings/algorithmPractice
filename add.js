/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"

Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/
function add(num) {
  return function sum(x) {
    return num + x
  }
}

const addBy10 = add(10)
addBy10(20) //-> 30

// console.log(typeof Null) 
console.log(typeof(typeof(2)))