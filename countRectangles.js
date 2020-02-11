/**

Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0.

The image you get is known to have potentially many distinct rectangles of 0s on a background of 1s. Write a function that takes in the image and returns the coordinates of all the 0 rectangles -- top-left and bottom-right; or top-left, width and height.

image1 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
]

Sample output variations (only one is necessary):

findRectangles(image1) =>
  // (using top-left-row-column and bottom-right):
  [
    [[0,0],[0,0]],
    [[2,0],[2,0]],
    [[2,3],[3,5]],
    [[3,1],[5,1]],
    [[5,3],[6,4]],
    [[7,6],[7,6]],
  ]
  // (using top-left-x-y and width/height):
  [
    [[0,0],[1,1]],
    [[0,2],[1,1]],
    [[3,2],[3,2]],
    [[1,3],[1,3]],
    [[3,5],[2,2]],
    [[6,7],[1,1]],
  ]

Other test cases:

image2 = [
  [0],
]

findRectangles(image2) =>
  // (using top-left-row-column and bottom-right):
  [
    [[0,0],[0,0]],
  ]

  // (using top-left-x-y and width/height):
  [
    [[0,0],[1,1]],
  ]

image3 = [
  [1],
]

findRectangles(image3) => []

image4 = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
]

findRectangles(image4) =>
  // (using top-left-row-column and bottom-right or top-left-x-y and width/height):
  [
    [[1,1],[3,3]],
  ]

n: number of rows in the input image
m: number of columns in the input image


**/



var image1 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];

var image2 = [
  [0],
];

var image3 = [
  [1],
];

var image4 = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];



// function findRectangle(image){
  
//   let firstZero = [0,0]
//   let lastZero = [0,0]
//   let firstEncounter = false;
           
//   for (let row = 0; row < image.length; row++){
//     for (let column = 0; column < image[row].length; column++){
//       let current = image[row][column];
//       if (current === 0 && firstEncounter === false){
//         firstZero = [row, column];
//         lastZero = [row, column]
//         firstEncounter = true;
        
//       } else if(current === 0) {
//         lastZero = [row, column]
//       }
//     }
//   }
//   return [firstZero, lastZero] 
// }

// console.log(findRectangle(image1)) //=> [[2,3],[3,5]]
// console.log(findRectangle(image2))  //=> 4,6 4,6
// console.log(findRectangle(image3)) //=> 3,5 4,6
// console.log(findRectangle(image4)) //=> 0,0 0,0
// console.log(findRectangle(image5))  //=> 0,0 0,0



function findAllRectangles(image){
  
  //copy image to new array 
  const picture = image.slice(0, image.length);
  
  const resultArray = [];
  let startZero = [0,0];
  let endZero = [0,0];
  let firstEncounter = false;
  
  // iterate over picture 
  // iterate over each sub-array
  // once we find a 0, 
      //count the remaining zeros in the row
      // count the zeroes in the column 
      // startZero = row/column of init, 
      // endZero = row + width / column + height
      // as we see each zero, turn it into a 1
    // push start & end to results 
    // return results 
  
  
  const swap = num => num === 0 ? 1; 
  
  for (let row = 0; row < picture.length; row++){
    for (let column = 0; column < picture[row].length; column++){
      
      let current = picture[row][column];
      
      if (current === 0 && firstEncounter === false){
        startZero = [row, column];
        current = 1;
        firstEncounter = true; 
        
      } else if (current === 0 && firstEncounter == true){
        endZero[1] ++;
      }
      
    }
  }
  
  
}

console.log(findAllRectangles(image4))