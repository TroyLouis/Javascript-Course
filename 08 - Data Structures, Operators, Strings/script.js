"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const hats = 2;
const weekend = ["fri", "sat", "sun"];

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // enhanced object literals
  hats,

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    [weekend[0]]: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*

//destructuring
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// how to receive 2 retur nvalues from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 3, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values, can be useful when dealing with APIs
const [p = 0, q = 0, r = 0] = [8, 9];
console.log(p, q, r);

//spread operator joining arrays
const arr1 = [7, 8, 9];

const newArray = [1, 2, 3, 4, 5, 6, ...arr1];
// can use spread operator to write all single elements
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, "Gnocci"];

console.log(newMenu);

// shallow copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables: arrays, strings, maps, sets

const someStr = "Helicopter";
const someStrArr = [...someStr, "s"];
console.log(someStrArr);
console.log(...someStr);

// const ingredients = [
//   prompt("Let's make a pasta: Ingredient one is?"),
//   prompt("Ingredient two is?"),
//   prompt("Ingredient three is?"),
// ];

//console.log(ingredients);

//restaurant.orderPasta(...ingredients);

// spread operator on objects

const newRestaurant = { ...restaurant, founder: "Buena" };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Carl's Jr.";
console.log(restaurantCopy);

// Rest pattern

const arr2 = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [pizza, , pasta, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(otherFood);

// functions with spread, arg and kwarg of python it looks like
const addFunc = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

addFunc(2, 3, 4, 5, 6, 7, 8, 9);

const xArr = [23, 5, 7];

addFunc(...xArr);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");


// short circuiting, if first value is truthy, returns it

console.log(3 || "Bob");
console.log(undefined || false || 0 || "Gray" || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guests2 = restaurant.numGuests || 10;

console.log(guests2);

// and operator, short circuits for first falsy and returns it

console.log(0 && "Barry");
console.log("hello" && undefined && false);

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "cheese");
}

restaurant.orderPizza && restaurant.orderPizza("mushroom", "cheese");

// nullish coalescing operator
// used because 0 is a falsy value
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// logical assignment operators

const rest1 = {
  name: "Pizza Hut",
  numGuests: 0,
};

const rest2 = {
  name: "Dominoes",
  owner: "Gary",
};

rest1.numGuests ??= 10;
console.log(rest1);


// Challenge

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const {
  odds: { team1, x: draw, team2 },
} = game;

const printGoals = function (...names) {
  console.log(`${names.length} goals were scored`);
};

printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win.");

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for of loop
for (const item of menu) console.log(item);

// index and array
for (const [i, j] of menu.entries()) {
  console.log(`${i + 1}: ${j}`);
}


// optional chaining
// if property before question mark exists, open will be returned. If not, returns undefined.

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.Friday?.open);

// multiple option chaining to make sure everything works
console.log(restaurant.openingHours?.sat?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed!";
  console.log(`On ${day}, we open at ${open}`);
}

// Optional chaining with methods

console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");

// Optional chaining with arrays

const randArray = [{ taco: "good", burrito: "bad", name: "kerry" }];
console.log(randArray[1]?.name ?? "user array empty");

// loop objects

for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

// property VALUES

const values = Object.values(restaurant.openingHours);

//entire object

const entries = Object.entries(restaurant.openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`We are open on ${key} at ${open} and close at ${close}.`);
}



// coding challenge

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const entries = Object.entries(game.scored);

for (const [goal, name] of entries) {
  console.log(`${name} scored goal ${parseInt(goal) + 1}!`);
}

let average = 0;
const odds = Object.values(game.odds);

for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

const niceOdds = Object.entries(game.odds);

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`${team} has a ${odd} chance of winning.`);
}


// Sets, no duplicate values

const orderSet = new Set(["pasta", "pizza", "pasta", "pizza", "hotdog"]);

console.log(orderSet);

//sets have size, arrays have length
console.log(orderSet.size);

console.log(new Set("Freedom"));

console.log(orderSet.has("pasta" && "bread"));

const staff = ["waiter", "waiter", "waiter", "host", "chef", "manager"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// maps

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon", "Portugal");
rest.set("categories", ["htodog", "pizza", "guam"]);
rest.set("open", 11).set(true, "we are open").set(false, "we are closed");
console.log(rest);

const time = 20;

console.log(rest.get(time > rest.get("open")));
rest.delete(2);
console.log(rest.size);
rest.set([1, 2, 3, 4, 5, 6, 7], "guacamole");
console.log(rest);

const arrz = [1, 2, 3, 4, 5, 6];
rest.set(arrz, "keys");
console.log(rest.get(arrz));

const question = new Map([
  ["Question", "What is my name?"],
  [1, "Greg"],
  [2, "Barry"],
  [3, "Sam"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);

// convert an object to a map
console.log(question);
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(question.get("Question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = 2;

console.log(question.get(question.get("correct") === answer));

// map to array conversion
console.log([...question]);
console.log([...question.keys()]);
const a = [...question.keys()];
console.log(typeof a);
const b = [2, 3, 4];
console.log(typeof b);

*/

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(airline.length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("Middle seat.");
  }
};

checkMiddleSeat("11B");
