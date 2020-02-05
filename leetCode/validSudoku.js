/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
*/

const validSudoku = (sudokuBoard) => {
  return checkRows(sudokuBoard) && checkColumns(sudokuBoard) && checkMatrix(sudokuBoard)
} 


const checkRows = (board) => {

  for (let i = 0; i < board.length; i++){
    let rowMap = {};
    for (let j = 0; j < board[0].length; j++){
        if (board[i][j] === '.') continue;
        let currentValue = board[i][j];
        if (rowMap[currentValue] === undefined) {
            rowMap[currentValue] = currentValue;
        } else {
            return false;
        }
    }
}
return true;


}

const checkColumns = (board) => {
  for (let i = 0; i < board.length; i++){
    let colMap = {};
    for (let j = 0; j < board[0].length; j++){
        if (board[j][i] === '.') continue;
        let currentValue = board[j][i];
        if (colMap[currentValue] === undefined) {
            colMap[currentValue] = currentValue;
        } else {
            return false;
        }
    }
}
return true;
}

const checkMatrix = (board) => {
  for (let i = 0; i < board.length; i = i + 3){
    for (let j = 0; j < board[0].length; j = j + 3) {
      let matrixMap = {};
      let subX = i + 3;
      let subY = j + 3;
      
      for (let k = i; k < subX; k++) {
        for (let l = j; l < subY; l++) {
          let currentValue = board[k][l];
          if (currentValue === '.') continue;
          if (matrixMap[currentValue] === undefined) {
              matrixMap[currentValue] = currentValue;
          } else {
              return false;
          }
        }
      }
    }
  }
  return true;
}

const sudoku1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

console.log(validSudoku(sudoku1))
// console.log(`TESTING: `, checkRows(sudoku1[0]))