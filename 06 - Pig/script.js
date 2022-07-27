"use strict";

const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const roll0 = document.getElementById("current--0");
const roll1 = document.getElementById("current--1");
const diceImg = document.querySelector(".dice");

const hideDiceImage = () => {
  diceImg.classList.add("hidden");
};

const resetGame = () => {
  document.querySelector("#score--0").textContent = 0;
  document.querySelector("#score--1").textContent = 0;
  document.querySelector("#current--0").textContent = 0;
  document.querySelector("#current--1").textContent = 0;
};

// starting conditions
let whoseTurn = 0;
score1.textContent = 0;
score0.textContent = 0;
hideDiceImage();

// player scores
let p1Score = 0;
let p2Score = 0;

// dice images
const diceImages = {
  1: "dice-1.png",
  2: "dice-2.png",
  3: "dice-3.png",
  4: "dice-4.png",
  5: "dice-5.png",
  6: "dice-6.png",
};

// roll dice
const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const updateRoll = (value) => {
  return whoseTurn == 0
    ? (roll0.textContent = value)
    : (roll1.textContent = value);
};

// change total score
const scoreChanger = (value) => {
  whoseTurn == 0 ? (p1Score += value) : (p2Score += value);
  score0.textContent = p1Score;
  score1.textContent = p2Score;
};

// reset score to 0
const resetScore = () => {
  return whoseTurn == 0
    ? (score0.textContent = p1Score)
    : (score1.textContent = p1Score);
};

// change player turn
const changeTurn = () => {
  document
    .querySelector(`.player--${whoseTurn}`)
    .classList.remove("player--active");
  whoseTurn == 0 ? (whoseTurn = 1) : (whoseTurn = 0);
  document
    .querySelector(`.player--${whoseTurn}`)
    .classList.add("player--active");
};

// change dice image
const changeDice = (number) => {
  diceImg.classList.remove("hidden");
  let diceImage = diceImages[number];
  diceImg.src = diceImage;
};

// reset game
btnNewGame.addEventListener("click", resetGame);

// gameplay
btnRollDice.addEventListener("click", () => {
  let diceValue = rollDice();
  let updatedRoll = updateRoll(diceValue);

  if (diceValue == 1) {
    whoseTurn == 0 ? (p1Score = 0) : (p2Score = 0);
    resetScore();
    changeTurn();
  } else {
    scoreChanger(updatedRoll);
    changeDice(diceValue);
  }

  if (p2Score >= 10) {
    document.querySelector(".player--0").classList.add("player--winner");
  }

  if (p2Score >= 10) {
    document.querySelector(".player--1").classList.add(".player--winner");
  }
});

btnHold.addEventListener("click", () => {
  hideDiceImage();
  changeTurn();
});
