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
  year: 1990,
  collar: true,
  calcAge: function () {
    console.log(2022 - this.year);
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
f();
