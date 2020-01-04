/* ********************************************* Problem A ******************************************** */

/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"

Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

const add = val => arg => arg + val;

/* ********************************************* Problem B ******************************************** */

// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

const getLength = (string, index = 0) => {
  if (!string[index]) return index;
  return getLength(string, ++index);
};

/* ********************************************* Problem C ******************************************** */

/*
Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever".
example.

const favoriteAuthors = [
  { name: 'Earnest Hemingway' },
  { name: 'Agatha Christie' },
  { name: 'J.K. Rowling' },
  { name: 'Steven King' },
];

const nextAuthor = itemRetriever(favoriteAuthors, 'name');
nextAuthor() -> 'Earnest Hemingway'
nextAuthor() -> 'Agatha Christie'
*/

const itemRetriever = (arr, key) => {
  let i = 0;
  return () => {
    const authorName = arr[i] ? arr[i][key] : 'No more Authors';
    i++;
    return authorName;
  };
};
