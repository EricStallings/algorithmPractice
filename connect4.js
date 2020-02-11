const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

//_.times(5, sayHello);


// Write Connect 4 game for the console that allows a human to play against the computer. The game will be played on a 4x4 grid, with two players. The human will be ‘X’ and play first and the AI will be ‘O’. “


// 1) Create the following:
//   a) board class with dashes for empty inputs
//      -- fill board
//   b) method to drop token at a column
//   c) method to print board


// 2) Create methods to see if:
//   a) move is valid 
//   b) board is full



// The board should look like the following (including column numbers):

//         -|-|-|X   
//         -|-|-|X   
//         -|O|-|O   
//         -|X|-|X    
//         1 2 3 4

/*
  1. Create a Connect4 board class 
  2. This class will have several methods: 
    property: BOOLEAN playerTurn 
    a) drop token (player turn, <checkWin> print, computer turn, print)
      - INPUT : number, references the column 
      - Output: either an X or O depending on the player turn 
                This should drop to the bottom-most free space in that column 
      - if Computer turn, randomize which column the computer drops 
      
      
    b) print board 
      - it prints the current board after each drop token (see current board) 
  // 3) Create a basic AI that will make any legal move. If there are no legal moves, throw an exception.
  
  // 4) Create a game loop that alternates moves from the human and the AI, printing the board between each move. Gracefully handle bad input from the human. The game should end when the board is full.
  
*/


class Connect4{
  constructor(){
    
  this.board = [
  ['-','-','-','-'],
  ['-','-','-','-'],
  ['-','-','-','-'],
  ['-','-','-','-'],
  ];
    
  this.playerTurn = true;
  
    
  }
  
  isMoveValid(column){
    if (this.board[0][column-1] == '-') return true;
    return false;
  }
  
  isBoardFull(){
    for (let i = 0; i < this.board[0].length; i++){
      if (this.board[0][i] == '-' ) return false; 
    }  
    return true;
  }
  
  
  
  computerDropToken(){
    
    if (this.isBoardFull()) return `BOARD IS FULL` // check winning conditions or TIE
    let column = Math.floor(Math.random() * 4)
    
    if (this.isMoveValid(column)){
      this.dropToken(column);
    } else {
      for (let i = 0; i < this.board.length; i++){
        if (this.board[0][i] == '-') this.dropToken(i+1);
        break;
      }
    }
  // this.swap();
  }
  
  
  
  swap(){
    this.playerTurn ? this.playerTurn = false : this.playerTurn = true; 
  }
  
  print(){
    // console.log(this.board) 
    let result = '';
    for (let i = 0; i < this.board.length; i++){
      let row = this.board[i]; 
      for (let j = 0; j < row.length; j++){
        if (j === 3){
          result += row[j];
        } else result += row[j] + '|'
      }
      result += '\n'
    }
    result += '1 2 3 4'
    
    return result;
  }
  
  dropToken(column){
  
   column = column - 1;
   let token;

   this.playerTurn === true ? token = 'X' : token = 'O'
    
   
    if (this.board[0][column] == 'X' || this.board[0][column] == 'O') return 'Invalid Selection'
    
   for (let i = this.board.length-1; i >= 0; i-- ){
    if (this.board[i][column] == '-'){
      this.board[i][column] = token;  
      break;
    }
   }
    console.log(this.print())
    this.swap();
  }
  
  
  playGame(){
   
    while(!this.isBoardFull()){
      
      const humanChoice = prompt(`Please Choose A Column`);
      if (this.dropToken(humanChoice) == 'Invalid Selection'){
        continue;
      };
      if (this.isBoardFull()) return 'Board Full!'
      this.computerDropToken();
      
    }
    
    console.log(`Nice Game!`);
    
  }
  
  
}

const myGame = new Connect4()

// console.log(myGame.print())
// myGame.dropToken(1);
// console.log(myGame.isBoardFull());
// console.log(myGame.isMoveValid(1)); //=> false

// console.log(myGame.isMoveValid(2)); //=> true

// myGame.dropToken(1);
// myGame.computerDropToken();
// myGame.dropToken(4);
// myGame.computerDropToken();

// console.log(myGame.print());


myGame.playGame();
/*
Please Choose A Column> 1
-|-|-|-
-|-|-|-
-|-|-|-
X|-|-|-
1 2 3 4
Board Full!*/