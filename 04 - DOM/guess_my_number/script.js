"use strict";
/*
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".score").textContent = "0";
document.querySelector(".number").textContent = 4;

document.querySelector(".guess").value = 19;
// value for an input field
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (guess && score > 1) {
    if (guess === secretNumber) {
      document.querySelector("body").style.backgroundColor = "#60b347";
      displayMessage("Correct Number!");
      document.querySelector(".number").textContent = secretNumber;
      if (score > Number(document.querySelector(".highscore").textContent)) {
        document.querySelector(".highscore").textContent = score;
      }
    } else if (guess !== secretNumber) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High!" : "Too Low!";
      score--;
      displayScore(score);
    }
  } else if (!guess) {
    displayMessage("Input a number!");
  } else {
    displayScore(0);
    displayMessage("You Lose!");
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  displayScore(score);
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").number = "?";
});
