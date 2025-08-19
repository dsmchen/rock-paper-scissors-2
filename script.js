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

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
  let string = '';

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

const handleClick = (e) => {
  let humanChoice = e.target.id;
  playRound(getComputerChoice(), humanChoice);
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
