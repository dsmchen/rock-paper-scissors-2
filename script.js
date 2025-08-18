function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return 'rock';
  } else if (randomNumber <= 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  return prompt('Enter rock, paper or scissors');
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (computerChoice === humanChoice) {
    console.log('You draw!');
  } else if (
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')
  ) {
    console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  } else {
    console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  }

  console.log(`Computer score: ${computerScore}`);
  console.log(`Your score: ${humanScore}`);
}

playRound(getComputerChoice(), getHumanChoice());
