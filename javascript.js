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

const computerChoice = ["ROCK", "PapER", "Scissors"];

function getComputerChoice(input) {
  if (input == 0) {
    return computerChoice[0].toLowerCase();
  } else if (input == 1) {
    return computerChoice[1].toLowerCase();
  } else {
    return computerChoice[2].toLowerCase();
  }
}

//console.log(getComputerChoice(randomNumber));
function playRound(playerSelection, computerSelection) {
  let victor;
  if (playerSelection == "rock" && computerSelection == "paper") {
    alert("You Lose! Paper beats Rock");
    console.log("You Lose! Paper beats Rock");
    victor = "Computer";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    alert("You Win! Rock beats Scissors");
    console.log("You Win! Rock beats Scissors");
    victor = "Player";
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    alert("Its a Draw!");
    console.log("Its a Draw!");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert("You Win! Paper beats Rock");
    console.log("You Win! Paper beats Rock");
    victor = "Player";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    alert("You Lose! Scissors beats Paper");
    console.log("You Lose! Scissors beats Paper");
    victor = "Computer";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    alert("Its a Draw!");
    console.log("Its a Draw!");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    alert("You Lose! Rock beats Scissors");
    console.log("You Lose! Rock beats Scissors");
    victor = "Computer";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    alert("You Win! Scissors beats Paper");
    console.log("You Win! Scissors beats Paper");
    victor = "Player";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    alert("Its a Draw!");
    console.log("Its a Draw!");
  } else {
    alert("Invalid input.");
    console.log("Invalid input.");
  }
  result(victor);
}

//console.log(playRound(playerSelection, getComputerChoice(randomNumber)));

function game() {
  for (let i = 0, playerSelection, randomNumber, wins; i < 5; i++) {
    playerSelection = prompt(
      'Please enter "Rock","Paper", or "Scissors"',
      ""
    ).toLowerCase();
    console.log(playerSelection);
    randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
    console.log(getComputerChoice(randomNumber));
    playRound(playerSelection, getComputerChoice(randomNumber));
  }
}

game();

function result(victor) {
  if (victor == "Computer") {
    computer = computer + 1;
  } else if (victor == "Player") {
    player = player + 1;
  } else {
    drawRound = drawRound + 1;
  }
}

if (computer + player + drawRound == 5) {
  alert("You have won " + player + " out of 5 games");
}
