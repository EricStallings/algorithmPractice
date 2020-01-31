/*
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .

Your task is to find their comparison points by comparing  with ,  with , and  with .
*/

function compareTriplets(a, b) {
  const resultArray = [0, 0];
  for (let i = 0; i < a.length; i++){
      if (a[i] > b[i]){
          resultArray[0] += 1
      } else if (a[i] < b[i]) {
          resultArray[1] += 1
      } else {
          continue;
      }
  }
  return resultArray;
}