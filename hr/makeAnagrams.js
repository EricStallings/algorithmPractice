

// input : two strings <STRING1, STRING2>
// output: the amount of characters to delete total from both strings to make them anagrams of each other TOTAL

function makeAnagram(string1, string2) {
// start by turning the two strings into objects and comparing the objects. 

// from there, delete properties that don't have anything in common and with every deletion, increment the count
  let totalCount = 0; 
  
  let n = string1.length > string2.length ? string1.length : string2.length
  const [obj1, obj2] = [{}, {}];
  
  for (let i = 0; i < n; i++){

    if (!obj1[string1[i]]) obj1[string1[i]] = 1;
    else if (obj1[string1[i]]) obj1[string1[i]] += 1;

    if (!obj2[string2[i]]) obj2[string2[i]] = 1;
    else if (obj2[string2[i]]) obj2[string2[i]] += 1;
  }
  console.log(obj1, obj2)
  if (obj1.hasOwnProperty('undefined')) delete obj1['undefined']
  if (obj2.hasOwnProperty('undefined')) delete obj2['undefined']

  const resultObj = {};
  for (key in obj1){
    if (obj2.hasOwnProperty(key)){
      resultObj[key] = 1
    } else if (resultObj[key]) resultObj[key] += 1;
    else totalCount += obj1[key];
  }

  for (key in obj2){
    if (obj1.hasOwnProperty(key)){
      resultObj[key] = 1
    } else if (resultObj[key]) resultObj[key] += 1;
    else totalCount += obj2[key];
  }

  console.log(resultObj)
  return totalCount;

}

let test1 = 'cde'
let test2 = 'abc'
let test3 = 'fcrxzwscanmligyxyvym'
let test4 = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'
let test5 = 'axxxxxxxxxx'
let test6 = 'a';

console.log(makeAnagram(test5, test6)) // => 10