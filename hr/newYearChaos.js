

function minimumBribes(array) {

  let tooChaotic = 'Too Chaotic';
  let counter = 0;
  for (let i = 0; i < array.length; i++){
    let originalPerson = i+1;
    let currentPerson = array[i]
    console.log(`Current El is ${currentPerson} and Original El is ${originalPerson}`)

    if (currentPerson - originalPerson < 0 || currentPerson == originalPerson) continue;
    else if (currentPerson - originalPerson > 2) return tooChaotic;
    else if (currentPerson - originalPerson <= 2) {
      console.log(`Oops! ${currentPerson} is out of order! Adding ${currentPerson - originalPerson} to the total counter.`)
      counter += (currentPerson - originalPerson) 

    }

  }
  console.log(`Drumroll please . . . `)
  return console.log(counter, `----------------`)
}

// 

const testCase = [2,1,5,3,4] 
const testCase2 = [2, 5, 1, 3, 4];
const testCase3 = [5, 1, 2, 3, 7, 8, 6, 4]
const testCase4 = [1, 2, 5, 3, 7, 8, 6, 4]

console.log(minimumBribes(testCase)) //=> 3 moves: 2 bribed 1 once, and 5 bribed both 4 and 3
console.log(minimumBribes(testCase2)) // too chaotic
console.log(minimumBribes(testCase3)) // => too chaotic 
console.log(minimumBribes(testCase4)) //=> 7