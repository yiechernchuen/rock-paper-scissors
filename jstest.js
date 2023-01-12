var counter = 0;
var computerChoice = Math.random();
if (computerChoice < 0.33) {
  computerChoice = "rock";
} else if (computerChoice <= 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

document.getElementById("box1").onclick = function () {
  var victor = "COMPUTER OVERLORD";
  if (computerChoice == "rock") {
    victor = "draw";
    alert("It is a tie, You chose Rock, computer chose Rock, Lame!");
  } else if (computerChoice == "paper") {
    alert("Sucker, YOU LOST! You chose Rock, COMPUTER OVERLORD chose paper");
  } else if (computerChoice == "scissors") {
    victor = "HUMAN";
    alert("DANG! You Beat Computer OVERLORD cuz he chose scissors");
  }
  updateRound(victor);
};
document.getElementById("box2").onclick = function () {
  var victor = "COMPUTER OVERLORD";
  if (computerChoice == "paper") {
    victor = "draw";
    alert("It is a tie, You chose Paper, computer chose Paper, Lame!");
  } else if (computerChoice == "scissors") {
    alert(
      "Sucker, YOU LOST! You chose Paper, COMPUTER OVERLORD chose scissors"
    );
  } else if (computerChoice == "rock") {
    victor = "HUMAN";
    alert("DANG! You Beat Computer OVERLORD cuz he chose rock");
  }
  updateRound(victor);
};
document.getElementById("box3").onclick = function () {
  var victor = "COMPUTER OVERLORD";
  if (computerChoice == "scissors") {
    victor = "draw";
    alert("It is a tie, You chose scissors, computer chose scissors, Lame!");
  } else if (computerChoice == "rock") {
    alert("Sucker, YOU LOST! You chose scissors, COMPUTER OVERLORD chose rock");
  } else if (computerChoice == "paper") {
    victor = "HUMAN";
    alert("DANG! You Beat Computer OVERLORD cuz he chose paper");
  }
  updateRound(victor);
};

var round = 0;
var human = 0;
var computer = 0;
var maxGames = 5;

function updateRound(victor) {
  round = round + 1;
  if (victor == "HUMAN") {
    human = human + 1;
  } else if (victor == "COMPUTER OVERLORD") {
    computer = computer + 1;
  } else {
    // It was a draw
  }
  if (round >= maxGames) {
    alert("You have won " + human + " out of " + round + " games.");
    // reset the score
    round = 0;
    human = 0;
    computer = 0;
  }
}
