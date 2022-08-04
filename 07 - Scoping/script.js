"use strict";

function calcAge(birth) {
  const age = 2022 - birth;
  function printAge() {
    const output = `You are ${age} and born in ${birth}.`;
    return output;
  }
  console.log(printAge());
  return age;
}

const name = "troy";
console.log(calcAge(1994));

//hoisting

console.log(a); // undefined as exepcted
// console.log(b);  cannot access before initialization
// console.log(c);  cannot access before initialization
var a = "a";
let b = "b";
const c = "c";

function scopeThis() {
  console.log(this);
}
const arrowAge = () => {
  console.log(this);
};

arrowAge(); // the 'this' of parent scope, doesn't get its own this
scopeThis(); // Undefined

const dog = {
  firstName: "Fido",
  year: 1990,
  collar: true,
  calcAge: function () {
    console.log(2022 - this.year);
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

dog.calcAge();

const matilda = {
  year: 2015,
};
// method borrowing
matilda.calcAge = dog.calcAge;
// this keyword points to object that is calling the method
matilda.calcAge();

const f = dog.calcAge;
console.log(f);
dog.greet();

const meg = {
  firstName: "Meg",
  lastName: "Ryan",
  year: 1996,
  calcAge: function () {
    console.log(2022 - this.year);

    //solution 1 resassigning this to self
    // preserve this keyword, often called 'that' sometimes
    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();

    //solution 2 using an arrow func that uses parent scope
    const isMillenials = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};

meg.calcAge();

const addExpr = function (a, b) {
  // only works in functionsd and declarations
  console.log(arguments);
  return a + b;
};

addExpr(2, 5, 6, 7, 8);

// saves the old age

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: "Troy",
  height: 70,
};

// adds the age to both, primitives vs objects
// call stack vs heap, only primitive values are immutable with const

const friend = me;
friend.height = 73;

console.log(friend);
console.log(me);

const jess = {
  firstName: "Jessica",
  lastName: "Smith",
  age: 27,
  favoriteNumbers: [1, 2, 3, 4, 5],
};

// doesn't actually create a 'copy' because reference type

// can't reassign
// marriedJessica = {};

// shallow copy an object
const marriedJess = Object.assign({}, jess);
marriedJess.lastName = "Davis";
//
marriedJess.favoriteNumbers.push(4);

console.log(jess, marriedJess);
