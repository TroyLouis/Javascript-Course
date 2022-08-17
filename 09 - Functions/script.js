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
