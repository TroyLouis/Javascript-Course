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

console.log(makeShake(2, 6));
