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
