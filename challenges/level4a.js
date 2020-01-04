/* ********************************************* Problem A ******************************************** */

/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

function transpose(arr) {
  if (!arr.length) return arr;

  const transposed = [];

  for (let i = 0; i < arr[0].length; i += 1) {
    const row = [];
    for (let j = 0; j < arr.length; j += 1) {
      row.push(arr[j][i]);
    }
    transposed.push(row);
  }

  return transposed;
}

/* ********************************************* Problem B ******************************************** */

/*
Write a function 'rotateGrid' that is given an NxN grid of elements represented by a 2D array, and outputs a grid equivalent to the same grid rotated 90 degrees clockwise.
Example:
const sampleGrid = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(rotateGrid(sampleGrid)); // -> [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]
*/

const rotateGrid = grid => {
  if (!grid.length) return grid;
  if (grid.length !== grid[0].length) return undefined;
  const rotated = [];
  const n = grid.length;

  for (let i = 0; i < n; i += 1) {
    const row = [];
    for (let j = 0; j < n; j += 1) {
      row.push(grid[n - j - 1][i]);
    }
    rotated.push(row);
  }

  return rotated;
};

/* ********************************************* Problem C ******************************************** */

/*
Write a function called 'balancedBrackets' that takes a string of text and returns true if the parentheses are balanced and false otherwise.
Non-bracket characters should not affect the logic.Make your solution work for all types of brackets: () [] {}

Examples:
balancedBrackets(" { }    n");                           // -> true
balancedBrackets("hi][  ");                              // -> false
balancedBrackets("[{random words and such}]");           // -> true
balancedBrackets("[The]Rains(In){Spain}");               // -> true
balancedBrackets("[({}Call me Ishmael)]");               // -> true
balancedBrackets("[(]{)}");                              // -> false
balancedBrackets(" gibberish { howdy: partner() }");     // -> true
balancedBrackets(" isThisAFunction?() { notReally();");  // -> false
*/

const balancedBrackets = input => {
  const stack = [];
  const map = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  for (const char of input) {
    // if opening bracket
    if (map[char]) stack.push(map[char]);
    if (/]|\}|\)/.test(char)) {
      // if closing bracket and matched
      if (char === stack[stack.length - 1]) stack.pop();
      // if closing bracket and not matched
      else return false;
    }
  }

  return !stack.length;
};
