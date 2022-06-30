"use strict";

// function
function logger() {
  console.log("My name is Troy.");
}

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// function with parameters
const appleJuice = fruitProcessor(5, 0);

function calcAge(birthYear) {
  const year = 2022;
  return year - birthYear;
}

// arrow functions
const calcAge2 = (birthYear) => 2022 - birthYear;

const yearsUntilRetire = (birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

const nameConcat = (first, last) => {
  return `${first} ${last}`;
};

// functions calling other functions using arrow functions

const cutFruitPieces = (fruit) => {
  return fruit * 4;
};

const cutVegetables = (vegetable) => {
  return vegetable * 2;
};

const makeShake = (apples, oranges) => {
  const fruitPieces = cutFruitPieces(apples);
  const vegetablePieces = cutVegetables(oranges);
  return `Shake made with ${fruitPieces} apples and ${vegetablePieces} oranges.`;
};

// Coding challenge

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (averageTeamA, averageTeamB) => {
  if (averageTeamA > 2 * averageTeamB) {
    return `Team A wins ${averageTeamA} to ${averageTeamB} `;
  } else if (averageTeamB > 2 * averageTeamA) {
    return `Team B wins ${averageTeamB} to ${averageTeamA}. `;
  } else {
    return "No Winner";
  }
};

// Arrays

const friends = ["Michael", "Greg", "Steven"];

const years = new Array(1991, 1994, 1995, 1997);

console.log(friends.length);

// only primitive values are immutable
friends[2] = "Tayveon";
console.log(friends);

// Array methods

const newLength = friends.push("Selena");
console.log(friends);
console.log(newLength);

friends.unshift("Marco");
console.log(friends);

const popped = friends.pop();
console.log(popped);
const unishifted = friends.shift();
console.log(unishifted);

console.log(friends.indexOf("Tayveon"));
console.log(friends.includes("Tayveon"));
console.log(friends.includes("Tayveons"));

// Coding Challenge

const bills = [100, 50, 45, 75, 90, 25, 500, 750];

const calcTip = (values) => {
  const tips = [];
  let tip;
  for (let i = 0; i <= values.length - 1; i++) {
    values[i] >= 50 && values[i] <= 300
      ? (tip = values[i] * 0.15)
      : (tip = values[i] * 0.2);
    tips.push(tip);
  }
  return tips;
};

console.log(calcTip(bills));
