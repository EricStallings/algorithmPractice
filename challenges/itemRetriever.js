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

const favoriteAuthors = [
  { name: 'Earnest Hemingway' },
  { name: 'Agatha Christie' },
  { name: 'J.K. Rowling' },
  { name: 'Steven King' },
];

const nextAuthor = itemRetriever(favoriteAuthors, 'name');

function itemRetriever (arrayOfObjects, key) {
  const list = arrayOfObjects;
  const name = key;
  let counter = 0;

  return () => {
    const itemsToReturn = list[counter][name];
    counter+=1;
    return itemsToReturn;
  }
}


console.log(nextAuthor())
console.log(nextAuthor())

nextAuthor() //-> 'Earnest Hemingway'
nextAuthor() //-> 'Agatha Christie'