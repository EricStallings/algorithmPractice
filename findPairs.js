/*
You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a list of (student ID number, course name) pairs and returns, for every pair of students, a list of all courses they share.

Sample Input:

student_course_pairs_1 = [
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

Sample Output (pseudocode, in any order):

find_pairs(student_course_pairs_1) =>
{
  [58, 17]: ["Software Design", "Linear Algebra"]
  [58, 94]: ["Economics"]
  [58, 25]: ["Economics"]
  [94, 25]: ["Economics"]
  [17, 94]: []
  [17, 25]: []
}

Additional test cases:

Sample Input:

student_course_pairs_2 = [
  ["42", "Software Design"],
  ["0", "Advanced Mechanics"],
  ["9", "Art History"],
]

Sample output:

find_pairs(student_course_pairs_2) =>
{
  [0, 42]: []
  [0, 9]: []
  [9, 42]: []
}


n: number of pairs in the input
s: number of students
c: number of courses being offered

*/

const studentCoursePairs1 = [
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
  ["58", "Software Design"]

];

const studentCoursePairs2 = [
  ["42", "Software Design"],
  ["0", "Advanced Mechanics"],
  ["9", "Art History"],
];

function findPairs(arrayOfArrays){
  
  // declare a classStructureObj
    // k = classname 
    // v = array of student IDs
  
  // iterate over arrayofArrs 
    // for each subArray 
    // look at the second el 
    // compare seecond el to CSO
      // if classname is not in obj 
        // add classname to obj with a value of a subarray (with first el in original subarray)
      // if classname is already in the obj 
        // add the student id to classname's subarray 
  
  /*
  {'software design' : ["42"]}
  */
  
  const classObj = {};
  
//   for (let i = 0; i < arrayOfArrays.length; i++){
//     let currentClass = arrayOfArrays[i][1];
//     let currentID = arrayOfArrays[i][0];
//     if (!classObj[currentClass]) {
//       classObj[currentClass] = [currentID]
//     } else {
//       classObj[currentClass].push(currentID)
//     }
//   }
  
//   return classObj;
  const studentObj = {}
   for (let i = 0; i < arrayOfArrays.length; i++){
    let currentClass = arrayOfArrays[i][1];
    let currentID = arrayOfArrays[i][0];
    if (!studentObj[currentID]) {
      studentObj[currentID] = [currentClass]
    } else {
      studentObj[currentID].push(currentClass)
    }
  }
  
//   for (let key in studentObj){
//     studentObj[key].sort()
//   }
  
  
  
//   return studentObj; 
  
  // declare a resultObj; 
  // iterate over the studentObj
  // for each key, look at the FIRST element in the value(class) array
  // check each other key's value array 
      // if there's a match, we'll push both student ids to result obj
      // if there's no match we'll create a k with a single item and an empty array 
  
  const resultObj = {}; 
  
  let tempKey = [];
  let tempVal = [];
  
  for (let studentID in studentObj){
    console.log(`This iteration, studentId is ${studentID}`)
    for (let i = 0; i < studentObj[studentID].length; i++){
//     studentObj[studentID] // value is an array
      let currentClass = studentObj[studentID][i];
    console.log(`currentClass is: `, studentObj[studentID][i] )
    
      for (let innerID in studentObj){
        if (studentID == innerID){
          console.log(`${studentID} found itself, movin on!`)
          continue;
        } else {
          for (let j = 0; j < studentObj[innerID].length; j++){
            if (currentClass == studentObj[innerID][i]){
              tempKey.push(studentID, innerID);
              tempVal.push(currentClass);
              resultObj[tempKey] = tempVal;
              
              tempKey = [];
              tempVal = [];
              
            }
          }
        }
      }
  }
  }
  
  return resultObj;
}

console.log(findPairs(studentCoursePairs1)); //=> {class: [id1,id2]}