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

console.log(addDecl(1, 2)); // no error
// console.log(addExpr(1, 2)); cannot access before initialization
// console.log(addArrow(1, 2)); cannot access before initialization
// temporal dead zone, google it
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
