"use strict";
// arrow functions do not work as constructors
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method within a constructor method like below
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

// prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Person));
