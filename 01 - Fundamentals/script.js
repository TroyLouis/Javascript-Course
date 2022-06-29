/*

let js = "amazing";
console.log(100 + 200 + 300);

console.log("Troy");

// Data Types
let firstName = "Troy";
let weight = 160;

console.log(firstName);
console.log(`${firstName}'s weight is ${weight} pounds.`);

let PI = 3.1415;

let truthyBool = true;
console.log(truthyBool);

console.log(typeof truthyBool);
console.log(typeof PI);

let favoriteFood = "Pizza";
console.log(favoriteFood);
favoriteFood = "Pasta";
console.log(favoriteFood);

let drink;
console.log(drink);
drink = "Gatorade";
console.log(drink);

// Operators

const birthYear = 1994;
console.log(birthYear == 1994);

const futureAge = 2037 - 1991;
console.log(futureAge);
const ageBob = 2050 - 1992;
console.log(ageBob);
console.log(futureAge * 2, ageBob);

let x = 15;
console.log(x + 5);
console.log(x);
x += 5;
console.log(x);

// Operator Precedence

let a, b;

a = b = 25 - 19;
console.log(a, b);

const averageAge = (ageBob + futureAge) / 2;
console.log(averageAge);

// Coding Excersize #1

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI);
console.log(johnBMI);
console.log(markBMI > johnBMI);

// String literals and templates

const myName = "Troy";
const myJob = "Programmer";
const myBirthYear = "1994";

const myInformation = `I'm ${myName}, a ${myJob}, and I was born in ${birthYear}.`;

console.log(myInformation);

// if statements

const age = 25;
if (age >= 21) {
  console.log("Can Drink");
} else if (age < 21) {
  console.log("Can't Drink");
}

age >= 21 ? console.log("Can Drink") : console.log("Can't Drink");


// Type Conversion and Coercion

const inputYear = "1991";
console.log(Number(inputYear) + 15);
console.log(2 + 3);

let n = "1" + 1;
console.log(n);
n -= 1;

console.log(typeof ("4" - 2));

console.log(5 + 6 + "4" + "3" - 2 + 3 + "6");

// Truthy and Falsy values

const money = 55;
if (money) {
  console.group(`You have ${money} dollars.`);
} else {
  console.log("Get a job.");
}


// equality opearators

age = 19;
console.log(age == 19);
console.log(age == "19");
console.log(age === 19);
console.log(age === "19");


// Switch Statements

const day = "Friday";

switch (day) {
  case "Monday": // day === 'Monday'
    console.log("Plan");
    console.log("Execute");
    break;
  case "Tuesday":
    console.log("Grill");
    break;
  case "Wednesday":
  case "Thursday":
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("Write");
    break;
  default:
    console.log("Not a valid day.");
}

*/

// Coding challenge

let tip;
let value = 500;

value >= 50 && value <= 300 ? (tip = value * 0.15) : (tip = value * 0.2);
