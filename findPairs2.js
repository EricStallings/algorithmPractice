const student_course_pairs_1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],]

function findPairs(array){
  const resultObj = {};

  let tempKey = [];
  let tempVal = [];

  for (let i = 0; i < array.length; i++){
    let currentStudent = array[i][0];
    let currentClass = array[i][1]

    for (let j = i; j < array.length; j++){
      let compareStudent = array[j][0];
      let compareClass = array[j][1];

      if (currentStudent == compareStudent){
        continue;
      } else if (currentClass == compareClass){
        tempKey.push(currentStudent, compareStudent)
        tempVal.push(currentClass);

        resultObj[tempKey] = tempVal;

        tempKey = [];
        tempVal = [];
      }

    }
  }

  return resultObj;
}

console.log(findPairs(student_course_pairs_1))