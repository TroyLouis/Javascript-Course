"use strict";
/*
const bookings = [];

// default parameters

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");

const ray = {
  name: "gary",
  passport: 1234,
};

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(ray);
console.log(ray);



//higher order functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ") + "!";
};

// Higher-order function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Sweet that is good", upperFirstWord);
transformer("oh that is not good", upperFirstWord);


// returning a function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeting = greet("Hey");

greeting("Bob!");
greet("Hello")("Sam");

// arrow func

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hey")("Jim");


*/

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightnum}`, name });
  },
};

lufthansa.book(239, "Lenny Kravitz");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// can't do this because the this keyword points to undefined and not the method
// book(23, "glen");

// call method
// first argument is which object you want to point to
book.call(eurowings, 29, "Petey Webber");
console.log(eurowings);

book.call(lufthansa, 200, "Bork Growna");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 434, "Glen Ivy");

// apply method
// pretty much the same as call but recieves array of args
book.apply(swiss, [493, "Mike Hully"]);
const flightData = [553, "Cherry Garcia"];
book.apply(swiss, flightData);

// probably the best option to use the spread operator and call()
book.call(swiss, ...flightData);

// bind method
// bind method takes the 'this' keyword of the object and sets in stone
const bookEW = book.bind(eurowings);
bookEW(15, "Steven Williams");
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
bookLH(15, "Jerry Mcguire");

// you can bind more arguments, this func will always be flight 23
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Glen Livet");

// with event listeners
lufthansa.planes = 300;

//the 'this' keyword turns into the button element so returns NaN
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};
// add .bind so that the this keyword points to lufthansa
// very important bind method
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application (preset parameters)
const AddTax = (rate, value) => value + value * rate;
console.log(AddTax(0.1, 200));

// There is no 'this' keyword so you use null for the object with bind
const salesTax = AddTax.bind(null, 0.075);

// another way of doing it with a function within a function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT = addTaxRate(0.075);
console.log(addVAT(100));
