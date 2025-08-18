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

function playGame() {
  function playRound(computerChoice, humanChoice, roundNumber) {
    humanChoice = humanChoice.toLowerCase();
    let string = `Round ${roundNumber}: `;
    if (computerChoice === humanChoice) {
      string += 'You draw!';
    } else if (
      (computerChoice === 'rock' && humanChoice === 'scissors') ||
      (computerChoice === 'paper' && humanChoice === 'rock') ||
      (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
      string += `You lose, ${computerChoice} beats ${humanChoice}!`;
      computerScore++;
    } else {
      string += `You win, ${humanChoice} beats ${computerChoice}!`;
      humanScore++;
    }

    console.log(
      `${string}
Computer score: ${computerScore}
Your score: ${humanScore}`
    );
  }

  for (let i = 1; i < 6; i++) {
    playRound(getComputerChoice(), getHumanChoice(), i);

    if (i === 5) {
      if (computerScore === humanScore) {
        console.log('You draw overall!');
      } else if (computerScore > humanScore) {
        console.log('Computer wins overall!');
      } else {
        console.log('You win overall!');
      }
    }
  }
}

playGame();
