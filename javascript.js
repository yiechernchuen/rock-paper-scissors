let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
let playerSelection = prompt('Please enter "Rock","Paper", or "Scissors"', "");

function getComputerChoice(input) {
  if (input === 1) {
    return "rock";
  } else if (input === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice(randomNumber));

function play(playerChoice, computerSelection) {
  if (playerChoice == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerChoice == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerChoice == "rock" && computerSelection == "rock") {
    return "Its a Draw!";
  } else if (playerChoice == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerChoice == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerChoice == "paper" && computerSelection == "paper") {
    return "Its a Draw!";
  } else if (playerChoice == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerChoice == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerChoice == "scissors" && computerSelection == "scissors") {
    return "Its a Draw!";
  } else {
    return "Invalid input.";
  }
}

alert(play(playerSelection, getComputerChoice(randomNumber)));
