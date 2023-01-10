let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);

function getComputerChoice(input) {
  if (input === 1) {
    return "rock";
  } else if (input === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

console.log(getComputerChoice(randomNumber));
