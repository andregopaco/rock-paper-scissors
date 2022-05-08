const choicesList = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let randomNumber = Math.floor(Math.random()*choicesList.length);
  let computerChoice = choicesList[randomNumber];
  return computerChoice;
}

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

let playerScore = 0;
let computerScore = 0;
const div = document.querySelector('.resultDiv');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let playerSelection = button.id;
    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes('win')) {
      playerScore++;
    } else if (roundResult.includes('lose')) {
      computerScore += 1;
    }

    div.textContent = `You choose ${playerSelection}. The computer chooses ${computerSelection}. ${roundResult}. Current score: player: - ${playerScore} x computer: ${computerScore}`;

      // TODO: append score on page;
    if (playerScore === 5) {
      div.textContent += ` You win the game!`;
    } else if (computerScore === 5) {
      div.textContent = `You lost the game.`;
    }
  });
});





