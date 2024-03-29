"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const user = "Steven Thomas Williams";

const createUsername = function (accounts) {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsername(accounts);

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, value) => acc + value, 0);
  labelBalance.textContent = `${balance} EUR`;
  console.log;
};

const calcDisplaySummary = function (movements, intRate) {
  const inDeposit = movements
    .filter((movements) => movements > 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumIn.textContent = `${inDeposit} EUR`;
  const outWithdrawal = movements
    .filter((movements) => movements < 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumOut.textContent = `${outWithdrawal} EUR`;
  const interest = (inDeposit + outWithdrawal) * (intRate * 0.001);
  labelSumInterest.textContent = `${interest}`;
};

calcDisplaySummary(account1.movements, account1.interestRate);
calcPrintBalance(account1.movements);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*



/////////////////////////////////////////////////

//slice
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice());
console.log([...arr]);
console.log(arr.slice(1, -2));

// splice mutates the original array
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// reverse, also mutates the original array
const arr2 = [1, 1, 2, 3, 4];
arr.reverse();
console.log(arr);

const letters = arr.concat(arr2);
//concat does the same thing as the spread operator in this sense
console.log(letters);
console.log([...arr, ...arr2]);

// join
console.log(letters.join(" - "));



const arr = [23, 44, 32, 56, 324, 73];

console.log(arr[0]);
// at is more modern
console.log(arr.at(0));
//traditional ways of getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
//at method is clearly better and more readable
console.log(arr.at(-1));


// older loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    `You withdrew ${Math.abs(movement)}`;
  }
}

//newer method with forEach
// can't use break or continue with forEach

movements.forEach(function (movement, i) {
  console.log;
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});



const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}, ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "EUR"]);
console.log(currenciesUnique);
// throwaway parameter _ because there are no keys in a set
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}, ${value}`);
});


// coding challenge

const checkDogs = function (dogAgeA, dogAgeB) {
  //create shalolw copy
  const dogAgeACopy = dogAgeA.slice();
  // remove first and last 2 elements
  dogAgeACopy.splice(0, 1);
  dogAgeACopy.splice(-2);
  // concatonate the arrays
  const dogsAges = dogAgeACopy.concat(dogAgeB);
  // loop through and print whether dog or puppy
  // for (let i = 0; i <= dogsAges.length - 1; i++) {
  //   const age =
  //     dogsAges[i] > 3
  //       ? `Dog number ${i + 1} is ${dogsAges[i]} and is an adult!`
  //       : `Dog number ${i + 1} is ${dogsAges[i]} and is a puppy!`;
  //   console.log(age);
  // }
  // array method vs loop
  dogsAges.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is ${dogsAges[i]} and is an adult!`);
    } else {
      console.log(`Dog number ${i + 1} is ${dogsAges[i]} and is a puppy!`);
    }
  });
};

checkDogs([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 9]);

const euroToUSD = 1.1;

const movementsUSD = movements.map((mov) => mov * euroToUSD);

const movementDescriptions = movements.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});
console.log(movementDescriptions);

// filter method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

// reduce method
// accumulator, current  value, index, whole array
// accumulator accumulates like a rolling snowball (duh)
// 0 at the end is what value to start counting from
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(acc, curr);
  return acc + curr;
}, 0);
console.log(balance);

const maxValue = movements.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else return curr;
}, 0);

console.log(maxValue);

// coding challenge
const avg1 = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(function (mov) {
    if (mov <= 2) {
      return mov * 2;
    } else return 16 + mov * 4;
  });
  const filterAdult = humanAge.filter((value) => value >= 18);
  const averageAge = filterAdult.reduce(
    (acc, curr, i, arr) => acc + curr / arr.length,
    0
  );

  return averageAge;
};

console.log(calcAverageHumanAge(avg1));
console.log(220 / 5);


// chaining methods
// can only chain methods after another if they return arrays, which is why reduce is last, it returns a value
const eutoUSD = 1.1;
const totalDepositUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    //console.log(arr);
    return mov * eutoUSD;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUSD);


// coding challenge 3

const testDate = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAgeAgain = (ages) => {
  const humanAge = ages
    .map(function (mov) {
      if (mov <= 2) {
        return mov * 2;
      } else return 16 + mov * 4;
    })
    .filter((value) => value >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
  return humanAge;
};

console.log(calcAverageHumanAgeAgain(testDate));


// find method

const firstWithdrawal = movements.find((mov) => mov < 0);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

*/

// coding challenge final

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 250, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((dog) => {
  dog.recFood = Math.round(dog.weight ** 0.75 * 28);
});
console.log(dogs);

dogs.forEach((dog) => {
  if (dog.owners.includes("Sarah")) {
    dog.curFood * 0.1 + dog.curFood >= dog.recFood ||
    dog.curFood * 0.1 - dog.curFood >= dog.recFood
      ? console.log("Feeding a good amount.")
      : console.log("Feeding too much!");
  }
});

const ownersEatTooMuch = dogs
  .filter(
    (dog) =>
      dog.curFood * 0.1 + dog.curFood > dog.recFood ||
      dog.curFood - dog.curFood * 0.1 > dog.recFood
  )
  .map((dog) => dog.owners)
  .flat();

const ownersEatTooLittle = dogs
  .filter(
    (dog) =>
      dog.curFood * 0.1 + dog.curFood < dog.recFood ||
      dog.curFood - dog.curFood * 0.1 < dog.recFood
  )
  .map((dog) => dog.owners)
  .flat();

ownersEatTooLittle.forEach((owner) => {
  console.log(`${owner} eats too much.`);
});
ownersEatTooMuch.foreach((owner) => {
  console.log(`${owner} eats too little.`);
});
