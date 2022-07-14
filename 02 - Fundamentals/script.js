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

//const bills = [100, 50, 45, 75, 90, 25, 500, 750];

// const calcTip = (values) => {
//   const tips = [];
//   let tip;
//   for (let i = 0; i <= values.length - 1; i++) {
//     values[i] >= 50 && values[i] <= 300
//       ? (tip = values[i] * 0.15)
//       : (tip = values[i] * 0.2);
//     tips.push(tip);
//   }
//   return tips;
// };

// Objects

const myObj = {
  firstName: "Troy",
  Height: 72,
  Weight: 160,
  hobbies: ["Tennis", "Golf", "Beach"],
};

console.log(myObj.hobbies);
console.log(myObj["hobbies"]);

const troy = {
  fName: "Troy",
  lName: "Boy",
};
const nameKey = "Name";
console.log(troy["f" + nameKey]);
console.log(troy["l" + nameKey]);

// Object methods

const person = {
  firstName: "Bob",
  lastName: "Smith",
  birthYear: 2004,
  job: "student",
  friends: ["Greg", "Sam", "Sally"],
  isVaccinated: false,

  // calcage: function () {
  //   console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcage: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} ${this.lastName} was born in ${
      this.birthYear
    } and his age is ${this.calcage()} and he has ${
      this.isVaccinated ? "been" : "not been"
    } vaccinated.`;
  },
};
console.log(person["calcage"](2004));

console.log(person.calcage());
console.log(person.age);

console.log(person.getSummary());

// Objects coding challenge`3

const bobBmi = {
  fName: "Bob",
  lName: "Smith",
  weight: 80,
  height: 2,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
  getSummary: function () {
    this.calcBMI();
    return `${this.fName} ${this.lName} weighs ${this.weight} kilograms and is ${this.height} meters tall. His BMI is ${this.bmi}. `;
  },
};

console.log(bobBmi.getSummary());

// for loops

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

const forArr = ["Troy", "Hotdog", 9, [1, 2, 3, 4], false];

// for (let i = 0; i < forArr.length; i++) {
//   console.log(forArr[i]);
// }

// continue and break
console.log("HI");
for (let i = 0; i < forArr.length; i++) {
  if (typeof forArr[i] === "number") break;
  console.log(forArr[i], typeof forArr[i]);
}

// while loop
let k = 1;
while (k <= 3) {
  console.log("Hi Mom");
  k++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}!`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Six!");
}

// coding challenge

const bills = [10, 20, 1, 2, 5, 100, 50, 500, 1000, 200];

const tipCalc = (values) => {
  const tips = [];
  const totals = [];
  let tip;
  let total;
  for (let i = 0; i < values.length; i++) {
    values[i] >= 50 && values[i] <= 300
      ? (tip = values[i] * 0.15)
      : (tip = values[i] * 0.2);
    tips.push(tip);
  }
  for (let i = 0; i < tips.length; i++) {
    total = tips[i] + bills[i];
    totals.push(total);
  }
  return { tips, totals };
};

const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const calcAverages = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
};

const avg = calcAverages(someArr);
console.log(avg);
