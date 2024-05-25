let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// function to randomly generate a number from 0-9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// function to compare the guess as well as the computerGuess to the target
const compareGuesses = (currentHumanGuess, computerGuess, target) => {
  const humanDiff = Math.abs(currentHumanGuess - generateTarget);
  const computerDiff = Math.abs(computerGuess - generateTarget);
  if (humanDiff < computerDiff) {
    return true;
  } else if (humanDiff > computerDiff) {
    return false;
  } else {
    return true;
  }
}
