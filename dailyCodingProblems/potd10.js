/* 
This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/
function functionDelay(inputFunc, n, ...args){
  setTimeout(()=>{
    return inputFunc(...args)
  }, n);
}

const sayHi=(string1, string2) => {
  console.log(`Hi, ${string1} and ${string2}!`)
}

const sayHelloEveryone =(string1, string2, string3)=> {
  console.log(`Hello, ${string1}, ${string2}, and ${string3}!`)
}

// functionDelay(sayHi, 3000, 'Simon', 'Eric'); 
// functionDelay(sayHelloEveryone, 2000, 'Jourdan', 'Kiril', 'Eric');