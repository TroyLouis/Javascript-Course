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
