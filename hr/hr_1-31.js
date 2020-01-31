const hourglassSum = (arrOfArrs) => {

  let sum = 0;

for (let x = 0; x < 4; x++){
  let y = x+1;
  let z = x+2;

    for (let i = 0; i < 4; i ++){
      let [j, k] = [i+1, i+2];
      // let hourglass = arrOfArrs[x][i] + arrOfArrs[x][j] + arrOfArrs[x][k] + arrOfArrs[y][j] + arrOfArrs[z][i] + arrOfArrs[z][j] + arrOfArrs[z][k]
      // console.log(`Hourglass is: ${arrOfArrs[i][i]} + ${arrOfArrs[i][j]} + ${arrOfArrs[i][k]} + ${arrOfArrs[j][j]} + ${arrOfArrs[k][i]} + ${arrOfArrs[k][j]} + ${arrOfArrs[k][k]}`)
      console.log(`"TOP" elements are:    ${arrOfArrs[x][i]}, ${arrOfArrs[x][j]},  ${arrOfArrs[x][k]}.`)
      console.log(`"MIDDLE" element is:   ${arrOfArrs[y][j]}`)
      console.log(`"BOTTOM" elements are: ${arrOfArrs[z][i]}, ${arrOfArrs[z][j]}, and ${arrOfArrs[z][k]}.`)
      // console.log(`They add up to: `, arrOfArrs[x][i]+ arrOfArrs[x][j] + arrOfArrs[x][k] )
      let top = arrOfArrs[x][i]+ arrOfArrs[x][j] + arrOfArrs[x][k];
      let middle = arrOfArrs[y][j];
      let bottom = arrOfArrs[z][i] + arrOfArrs[z][j] + arrOfArrs[z][k]
      hourglass = top + middle + bottom;
      console.log(`Hourglass is ${hourglass} and Sum is ${sum}.`)
      if (hourglass > sum){
        console.log(`Since ${hourglass} is bigger than ${sum}, Sum is now ${hourglass}`)
        sum = hourglass;
      } 
      console.log(`-------------------------`)
    }
  }
  return sum;
}


const matrix = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]
console.log(hourglassSum(matrix))
// 3, 2, 1, 0, 
//1, 1,1, 0,