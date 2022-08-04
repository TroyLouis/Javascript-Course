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
};

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
