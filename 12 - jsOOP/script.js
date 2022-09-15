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
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species);
console.log(jonas.hasOwnProperty("firstName"));
// property species isn't inside of the object, it has access due to the prototype Person
console.log(jonas.hasOwnProperty("species"));

const arr = [3, 6, 9, 12];

//coding challenge number 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

const ferarri = new Car("Ferrari", 100);
console.log(ferarri);
ferarri.accelerate();

Car.prototype.brake = function (value) {
  this.speed -= value;
  console.log(this.speed);
};

const porsche = new Car("Porsche", 150);

porsche.brake(25);
