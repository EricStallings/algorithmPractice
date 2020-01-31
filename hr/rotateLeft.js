function rotateLeft(array, n) {

  const rotate = (arr) =>{
      let first = arr[0];
      arr.shift();
      arr.push(first);
  }

  for (let i = 0; i < n; i++){
      rotate(array)
  }
  return array;
}

console.log(rotateLeft([1,2,3,4,5],3)) //=> 4, 5, 1, 2, 3
