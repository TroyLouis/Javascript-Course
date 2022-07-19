// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

const measureKelvin = (degrees) => {
  const measurement = {
    type: "temperature",
    unit: "celcius",
    value: degrees,
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin(3));

// coding challenge

const tempArray = [10, 15, 26, 19, 5, 0, 31];

const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`The temperature is ${arr[i]}.`);
  }
};

printForecast(tempArray);
