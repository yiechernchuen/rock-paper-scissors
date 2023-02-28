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

const getComputerChoice = (input) => computerChoice[input].toLowerCase();

const playRound = (playerSelection, computerSelection) => {
  let victor;
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      alert('You Lose! Paper beats Rock');
      victor = 'computer';
    } else if (computerSelection === 'scissors') {
      alert('You Win! Rock beats Scissors');
      victor = 'player';
    } else if (computerSelection === 'rock') {
      alert('Its a Draw!');
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      alert('You Win! Paper beats Rock');
      victor = 'player';
    } else if (computerSelection === 'scissors') {
      alert('You Lose! Scissors beats Paper');
      victor = 'computer';
    } else if (computerSelection === 'paper') {
      alert('Its a Draw!');
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      alert('You Lose! Rock beats Scissors');
      victor = 'computer';
    } else if (computerSelection === 'paper') {
      alert('You Win! Scissors beats Paper');
      victor = 'player';
    } else if (computerSelection === 'scissors') {
      alert('Its a Draw!');
    }
  } else {
    alert('Invalid input.');
  }
  calculateResult(victor);
};

const calculateResult = (victor) => {
  if (victor === 'computer') {
    computer += 1;
  } else if (victor === 'player') {
    player += 1;
  } else {
    drawRound += 1;
  }
};

const game = () => {
  let playerSelection = '';
  let randomNumber = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt('Please enter "Rock","Paper", or "Scissors"').toLowerCase();
    console.log(playerSelection);
    randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
    console.log(getComputerChoice(randomNumber));
    playRound(playerSelection, getComputerChoice(randomNumber));
  }
};

game();
if (computer + player + drawRound === 5) {
  alert(`You have won ${player} out of 5 games`);
}
