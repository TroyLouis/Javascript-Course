"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
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

*/

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
