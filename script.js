// console.log("Hello world!");

// Create an array with the three possible answers;
const choices = ['Rock', 'Paper', 'Scissors'];

// Make the computer randomly pick one of those answers;
function computerPlay() {
  let randomNumber = Math.floor(Math.random()*choices.length);
  let computerChoice = choices[randomNumber];
//   console.log(computerChoice);
  return computerChoice;
}

// The player shall input his/her option;


// Both answers are compared; If the answers are the same, it's a tie;
// Else (answers are different): 
// If player choice is rock it wins if computer picks scissors; otherwise player loses;
// If player choice is paper it wins if computer picks rock; otherwise player lose;
// If player choice is scissors it wins if computer picks paper; otherwise player lose;

function playRound (playerSelection, computerSelection) {  
  if (playerSelection === computerSelection) {
    return "It's a tie"
  } else {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
      return "You win! Rock beats Scissors."
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
      return "You win! Paper beats Rock." 
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
      return "You win! Scissors beat Paper."
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
      return "You lose. Paper beats Rock." 
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
      return "You lose. Scirssors beats Paper." 
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
      return "You lose. Rock beats Scissors." 
    }
  }
}
