const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let wins = 0;
let loses = 0;
let ties = 0;

for (let i = 1; i < 6; i++) {
  let userInput = prompt("Enter rock paper or scissors to play").toLowerCase();
  playGame(userInput);
  if (i === 5) {
    score();
  }
}

function score() {
  if (wins > loses) {
    console.log(`You Win! wins: ${wins}, loses: ${loses}, ties: ${ties}`);
  } else if (loses > wins) {
    console.log(`You lose! wins: ${wins}, loses: ${loses}, ties: ${ties}`);
  } else if (wins === loses) {
    console.log(`Tied Game! wins: ${wins}, loses: ${loses}, ties: ${ties}`);
  }
}

function computerMove() {
  let random = Math.random();

  if (random < 0.33) {
    return rock;
  } else if (random < 0.66) {
    return paper;
  } else if (random < 1) {
    return scissors;
  }
}

function playGame(userInput) {
  let opponent = computerMove();

  if (userInput === rock && opponent === scissors) {
    console.log("Rock crushes Scissors");
    return wins++;
  } else if (userInput === rock && opponent === paper) {
    console.log("Rock wrapped by Paper");
    return loses++;
  } else if (userInput === rock && opponent === rock) {
    console.log("Rock tied with Rock");
    return ties++;
  } else if (userInput === paper && opponent === rock) {
    console.log("Paper wraps Rock");
    return wins++;
  } else if (userInput === paper && opponent === scissors) {
    console.log("Paper cut by Scissors");
    return loses++;
  } else if (userInput === paper && opponent === paper) {
    console.log("Paper tied with Paper");
    return ties++;
  } else if (userInput === scissors && opponent === paper) {
    console.log("scissors cuts Paper");
    return wins++;
  } else if (userInput === scissors && opponent === rock) {
    console.log("Scissors crushed by Rock");
    return loses++;
  } else if (userInput === scissors && opponent === scissors) {
    console.log("Scissors tied with Scissors");
    return ties++;
  }
}
