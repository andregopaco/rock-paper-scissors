// console.log("Hello world!");

// Create an array with the three possible answers;
const choicesList = ['rock', 'paper', 'scissors'];

// Make the computer randomly pick one of those answers;
function computerPlay() {
  let randomNumber = Math.floor(Math.random()*choicesList.length);
  let computerChoice = choicesList[randomNumber];
  return computerChoice;
}

// The player shall input his/her option;
function playerPlay() {
  let choiceNotListed = true;
  while (choiceNotListed) {
    playerChoice = prompt("Choose one: rock, paper or scissors?").toLowerCase();
    if (choicesList.includes(playerChoice)) {
      choiceNotListed = false;
      return playerChoice;
    } else {
    alert("Answer invalid");
    }
  }   
}

// Both answers are compared; If the answers are the same, it's a tie;
// Else (answers are different): 
// If player choice is rock it wins if computer picks scissors; otherwise player loses;
// If player choice is paper it wins if computer picks rock; otherwise player lose;
// If player choice is scissors it wins if computer picks paper; otherwise player lose;

function playRound (playerSelection, computerSelection) {  
  if (playerSelection === computerSelection) {
    return "It's a tie"
  } else {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
      return "You win! Rock beats Scissors."
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      return "You win! Paper beats Rock." 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      return "You win! Scissors beat Paper."
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      return "You lose. Paper beats Rock." 
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      return "You lose. Scissors beats Paper." 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      return "You lose. Rock beats Scissors." 
    }
  }
}


// function game() {
//   let keepGoing = true;
//   let playerScore = 0;
//   let computerScore = 0;

//   while (keepGoing) {

//     let playerSelection = playerPlay();
//     console.log(playerSelection);
//     let computerSelection = computerPlay();
//     console.log(computerSelection);

//     let roundResult = playRound(playerSelection, computerSelection);
//     console.log(roundResult);
    
//     if (roundResult.includes('win')) {
//       playerScore++;
//     } else if (roundResult.includes('lose')) {
//       computerScore += 1;
//     }

//     if (computerScore === 5 || playerScore === 5) {
//       console.log(`You've reached the end of this game. The final score is: \nPlayer: ${playerScore} x Computer: ${computerScore}.`)
//       keepGoing = false;
//     } else {
//       console.log(`Player: ${playerScore} x Computer: ${computerScore}.`)
//     }
//   }
// }

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    console.log(playerSelection);
    let computerSelection = computerPlay();
    console.log(computerSelection);
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
  });
});

