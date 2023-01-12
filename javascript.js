//let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
/*let playerSelection = prompt(
  'Please enter "Rock","Paper", or "Scissors"',
  ""
).toLowerCase();*/
//let response = playerSelection.toLowerCase();

//console.log(playerSelection);

let computer = 0;
let player = 0;
let drawRound = 0;

const computerChoice = ['ROCK', 'PapER', 'Scissors'];

function getComputerChoice(input) {
  return computerChoice[input].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let victor;
  if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      alert('You Lose! Paper beats Rock');
      victor = 'Computer';
    } else if (computerSelection == 'scissors') {
      alert('You Win! Rock beats Scissors');
      victor = 'Player';
    } else if (computerSelection == 'rock') {
      alert('Its a Draw!');
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      alert('You Win! Paper beats Rock');
      victor = 'Player';
    } else if (computerSelection == 'scissors') {
      alert('You Lose! Scissors beats Paper');
      victor = 'Computer';
    } else if (computerSelection == 'paper') {
      alert('Its a Draw!');
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      alert('You Lose! Rock beats Scissors');
      victor = 'Computer';
    } else if (computerSelection == 'paper') {
      alert('You Win! Scissors beats Paper');
      victor = 'Player';
    } else if (computerSelection == 'scissors') {
      alert('Its a Draw!');
    }
  } else {
    alert('Invalid input.');
  }
  calculateResult(victor);
}

function game() {
  for (let i = 0, playerSelection, randomNumber, wins; i < 5; i++) {
    playerSelection = prompt('Please enter "Rock","Paper", or "Scissors"', '').toLowerCase();
    console.log(playerSelection);
    randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
    console.log(getComputerChoice(randomNumber));
    playRound(playerSelection, getComputerChoice(randomNumber));
  }
}

game();

function calculateResult(victor) {
  victor = victor.toLowerCase();
  if (victor == 'computer') {
    computer = computer + 1;
  } else if (victor == 'player') {
    player = player + 1;
  } else {
    drawRound = drawRound + 2;
  }
}

if (computer + player + drawRound == 5) {
  alert('You have won ' + player + ' out of 5 games');
}
