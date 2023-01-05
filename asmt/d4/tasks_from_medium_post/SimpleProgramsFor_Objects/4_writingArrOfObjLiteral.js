/**
 * How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)

Guvi, Geek, 6, IIT-M RP,Chennai.
Amazon, Inc, 31, SP Infocity, Chennai.
Google, Alphabet, 34 Amphitheater Parkway, MountainView.
Tesla, Inc , 32, 333 Santana Row,San Jose.
 */

let myobj = [
  {
    firstname: "Guvi",
    lastname: "Geek",
    block: 6,
    street: "IIT-M RP",
    city: "Chennai",
  },
  {
    firstname: "Amazon",
    lastname: "Inc",
    block: 31,
    street: "SP Infocity",
    city: "Chennai",
  },
  {
    firstname: "Google",
    lastname: "Alphabet",
    block: null,
    street: "34 Amphitheater Parkway",
    city: "MountainView",
  },
  {
    firstname: "Tesla",
    lastname: "Inc",
    block: 32,
    street: "333 Santana Row",
    city: "San Jose",
  }
];

console.log(myobj);




// Array(4) [ {…}, {…}, {…}, {…} ]
// ​
// 0: Object { firstname: "Guvi", lastname: "Geek", block: 6, … }
// ​
// 1: Object { firstname: "Amazon", lastname: "Inc", block: 31, … }
// ​
// 2: Object { firstname: "Google", lastname: "Alphabet", street: "34 Amphitheater Parkway", … }
// ​
// 3: Object { firstname: "Tesla", lastname: "Inc", block: 32, … }
// ​
// length: 4
// ​
// <prototype>: Array []