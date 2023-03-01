const getComputerChoice = (input) => computerChoice[input].toLowerCase();

const playRound = (playerSelection, computerSelection) => {
  let victor = '';
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      paragraph.textContent = 'You Lose! Paper beats Rock';
      victor = 'computer';
    } else if (computerSelection === 'scissors') {
      paragraph.textContent = 'You Win! Rock beats Scissors';
      victor = 'player';
    } else if (computerSelection === 'rock') {
      paragraph.textContent = 'Its a Draw!';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      paragraph.textContent = 'You Win! Paper beats Rock';
      victor = 'player';
    } else if (computerSelection === 'scissors') {
      paragraph.textContent = 'You Lose! Scissors beats Paper';
      victor = 'computer';
    } else if (computerSelection === 'paper') {
      paragraph.textContent = 'Its a Draw!';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      paragraph.textContent = 'You Lose! Rock beats Scissors';
      victor = 'computer';
    } else if (computerSelection === 'paper') {
      paragraph.textContent = 'You Win! Scissors beats Paper';
      victor = 'player';
    } else if (computerSelection === 'scissors') {
      paragraph.textContent = 'Its a Draw!';
    }
  } else {
    alert('Invalid input.');
  }
  calculateResult(victor);
};

const calculateResult = (victor) => {
  if (victor === 'computer') {
    computer += 1;
    computerScore.textContent = computer;
  } else if (victor === 'player') {
    player += 1;
    playerScore.textContent = player;
  } else {
    drawRound += 1;
  }
  if (player === 5) {
    paragraph.textContent = 'You have won 5 games!';
    player = 0;
    computer = 0;
    computerScore.textContent = computer;
    playerScore.textContent = player;
  } else if (computer === 5) {
    paragraph.textContent = 'The PC has won 5 games!';
    player = 0;
    computer = 0;
    computerScore.textContent = computer;
    playerScore.textContent = player;
  }
};

const game = (e) => {
  let playerChoice = e.target.textContent;
  playRound(playerChoice, getComputerChoice(Math.floor(Math.random() * 3)));
};

let computer = 0;
let player = 0;
let drawRound = 0;

const computerChoice = ['ROCK', 'PapER', 'Scissors'];

const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');

const paragraph = document.querySelector('p');

const button = document.querySelectorAll('button');

button.forEach((button) => {
  button.addEventListener('click', game);
});
