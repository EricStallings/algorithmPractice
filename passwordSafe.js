/* Write a function "passwordSafe" that takes two arguments: a string which will be the password, and a value which will be the "safe".
"passwordSafe" should return a function that takes in a password as a string.
If that password doesn’t match the one originally provided, return the string “You have entered the wrong password”. If the passwords do match, return the safe.

Example:
const mySafe = passwordSafe('myPassword', 'My Super Secret');
mySafe('wrongPassword') -> "You have entered the wrong password"
mySafe('myPassword') -> "My Super Secret"
*/

function passwordSafe(password, storedValue){

    // const actualPassword = password;
    // const safe = storedValue;

    // return (attempt) => {
    //   return actualPassword === attempt ? safe : 'You have entered the wrong password.'
    // }
 return (attempt) => password === attempt ? storedValue : 'You have entered the wrong password.'
    

  }

const mySafe = passwordSafe('myPassword', 'My Super Secret');
console.log(mySafe('wrongPassword')) //-> "You have entered the wrong password"
console.log(mySafe('myPassword')) //-> "My Super Secret"