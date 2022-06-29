"use strict";

function logger() {
  console.log("My name is Troy.");
}

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);

function calcAge(birthYear) {
  const year = 2022;
  return year - birthYear;
}

const calcAge2 = (birthYear) => 2022 - birthYear;

const yearsUntilRetire = (birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

const nameConcat = (first, last) => {
  return `${first} ${last}`;
};

console.log(nameConcat("Troy", "Smith"));
