// console.log("Hello world!");

// Create an array with the three possible answers;
const choices = ['Rock', 'Paper', 'Scissors'];

// Make the computer randomly pick one of those answers;
function computerPlay() {
  let randomNumber = Math.floor(Math.random()*choices.length);
  let computerChoice = choices[randomNumber];
  console.log(computerChoice);
}

// The player shall input his/her option;


// Both answers are compared;

// If the answers are the same, it's a tie;

// Else (answers are different)
// If player choice is rock it wins if computer picks scissors; otherwise player loses;
// If player choice is paper it wins if computer picks rock; otherwise player lose;
// If player choice is scissors it wins if computer picks paper; otherwise player lose;