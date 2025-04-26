// alert("hello js");
// console.log("Hello js console");
// console.log(1 + 1);
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// different console method

// console.log("this is a message");
// console.warn("this is a warning");
// console.error("this is an error");

// comment: a comment is a line of code that is not executed

// this is a single line comment

/* this  is
a multi
line comment */

// variables: a variable is a container for storing data (or values)

// there are 3 ways to decare variables in js (var, let and const)

// var myName = "Godblesss";

// var:
// can be initialized
// can be reassigned
// can be redeclared

// intialized
// var myName = "Godblesss"; //initialized with a value
// let myName; //initialized without a value

// reassign
// myName = "Freeman";
// myName = "Chidinma";

// redeclare

// var myName = "Godbless";
// var myName = "Freeman";

// console.log(myName);

// let
// can be initialized
// can be reassignment
// cannot be redeclared

// initialization
// let myName; //initialized without a value
// let myName = "Billy"; //initialized with a value
// console.log(myName);

// // reassignment
// myName = "Chidinma";
// console.log(myName);

// myName = "Lilian";
// console.log(myName);

// const
// cannot be initialized without a value
// cannot be redefined
// cannot be redeclared

// const myName = "Godbless";
// var myName;

// myName = "Godbless";

// console.log(myName);

// when to use let and const
// use let if the varialbe is going to be updated later on e.g score of a user in a game, age of a user etc
// use const if the varialbe is not going to be updated e.g birth year

// varialbe hold values (these values are data types)

// let myName = "Godbless";
// console.log(myName);

// data types
// two major data types (primitive and reference)

// primitive => one that is stored directly in memory, i.e it holds a single value
// e.g string, number, boolean, undefined and null

// reference=> they can hold multiple value, they are used as a resource (array, object etc)

// let sentence = 'Hello i am a boy';
// let myName = "Godbless";
// let myAge = 75456789;
// let pi = 3.172;
// let isMarried = false;
// let isAdmin = true;
// let result = 3 > 6;
// let result2 = 3 < 6;
// let myVar;
// let myVar2 = undefined;
// let emptyVar = null;

// console.log(typeof(sentence))
// console.log(typeof sentence);
// console.log(typeof myName);
// console.log(typeof myAge)
// console.log(typeof pi)
// console.log(typeof isMarried)
// console.log(typeof isAdmin)
// console.log(result)
// console.log(typeof result)
// console.log(result2)
// console.log(typeof result2)
// console.log(typeof myVar)
// console.log(typeof myVar2)
// console.log(emptyVar)
// console.log(typeof emptyVar)
// console.log(typeof null) // gives object which is a bogus answer

// how to name a variable

// let intialScore = 34;

// array: uses square brackets, hold multiple elements which are comma separated
// NB: arrays are used to hold multiple values of thesame data types

// let names = ['Godbless', 'Freeman', 'Lancelot', 'Maxwell', 'John']

// // total no of items or elements in an array = array.length
// console.log(names.length);

// // 1st element of an array has zero index
// console.log(names[2]);

// names.push('Billy', 'chidinma', 'Emmanuel');

// names.push('ojo');

// // last element of an array has array.length - 1 index
// console.log(names[names.length-1])

// objects: uses curly brackets, hold multiple elements which are in key value pairs separeated with comma
// NB: objects are used to hold multiple values of different data types

// let person = [1, 'godbless', 'ejovwogfreeman007@gmail.com', 75, true];

// let person = {
//   id: 1,
//   name: "godbless",
//   email: "ejovwogfreeman007@gmail.com",
//   score: 75,
//   isPromoted: true,
//   sub_combination: ["html", "css", "js"],
// };

// accessing element of objects (dot and bracket notation)

// console.log(person);

// // dot notation
// console.log(person.name);

// // bracket notation
// console.log(person['name']);

// person.school = 'pluralcode';
// person.program = 'web dev';
// console.log(person);

// console.log(person.sub_combination[2]);

// continue from operators

// js operators combine operands to give results

// Arithmetic operators (+, -, *, /, %, **).

// let x = 5;
// let y = 2;
// let z;

// z = x + y;
// z = y - x;
// z = y * x;
// z = y / x;
// z = y % x;
// z = y ** x;

// console.log(z)

// Assignment operators (=, +=, -=, *=, /=, %=, **= etc.).

// const myVar = "something";

// const myVar2 = "something";

// let myNum = 5;

// myNum = myNum + 5;
// myNum += 5;
// myNum -= 2;
// myNum *= 2;
// myNum /= 2;
// myNum %= 2;
// myNum **= 2;

// console.log(myNum);

// Comparison operators (==, ===, !=, !==, >, <, >=, <=).
// let x = 23; //number
// let y = 23; // number
// let z = "23"; // string

// == (compares value without regards to data type)
// console.log(x == y); //true
// console.log(x == z); //true

// === (compares both values and data types)
// console.log(x === y); //true
// console.log(x === z); //false

// ! (negation or logical not i.e it turns true to false and false to true)

// != (is the negation or opposite of ==)
// console.log(x != y); //false
// console.log(x != z); //false

// !== (is the negation or opposite of ===)
// console.log(x !== y); // false
// console.log(x !== z); //true

// > and < (greater than and less than);

// let x = 23; //number
// let y = 30; // number

// console.log(x > y);
// console.log(x < y);

// >= and <= (greater than or equal to and less than or equal to)
// console.log(5 >= 5);
// console.log(5 <= 5);

// Logical operators (&&, ||, !).
// Logical AND (&&)
// console.log(5 > 4 && 5 == "5" && 3 < 10); // true
// console.log(5 > 4 && 5 === "5" && 3 < 10); // false

// Logical OR (||)
// console.log(5 > 4 || 5 == "5" || 3 < 10); // true
// console.log(5 > 4 || 5 === "5" || 3 < 10); // true
// console.log(4 > 5 || 7 < 3 || 8 == 8); //true
// console.log(4 > 5 || 7 < 3 || 8 != 8); //false

// Logical NOT (!)
// console.log(!(5 > 4 && 5 == "5" && 3 < 10)); // false
// console.log(!(5 > 4 && 5 === "5" && 3 < 10)); // true
// console.log(!(5 > 4 || 5 == "5" || 3 < 10)); // false
// console.log(!(5 > 4 || 5 === "5" || 3 < 10)); // false
// console.log(!(4 > 5 || 7 < 3 || 8 == 8)); // false
// console.log(!(4 > 5 || 7 < 3 || 8 != 8)); // true

// control flow
// let x = 3;

// if statement
// if (x == 3) {
//   console.log("x is equal to 3");
// }

// // if and else statement
// if (x == 3) {
//   console.log("x is equal to 3");
// } else {
//   console.log("x is not equal to 3");
// }

// if, else if and else statement
// x = 7;
// if (x == 1) {
//   console.log("x is equal to 1");
// } else if (x == 3) {
//   console.log("x is equal to 3");
// } else if (x == 5) {
//   console.log("x is equal to 5");
// } else if (x == 7) {
//   console.log("x is equal to 7");
// } else if (x == 9) {
//   console.log("x is equal to 9");
// } else {
//   console.log("not a match");
// }

// let color = "pink";

// if (color === "red") {
//   console.log("the color is red");
// } else if (color === "green") {
//   console.log("the color is green");
// } else if (color === "blue") {
//   console.log("the color is blue");
// } else {
//   console.log("not a match");
// }

// // switch statment
// let color = "green";

// switch (color) {
//   case "red":
//     console.log("the color is red");
//     break;
//   case "blue":
//     console.log("the color is blue");
//     break;
//   case "green":
//     console.log("the color is green");
//     break;
//   default:
//     console.log("not a match");
//     break;
// }

// ternary operator
// let color = "blue";

// if (color === "blue") {
//   console.log("your color is blue");
// } else {
//   console.log("not a match");
// }

// console.log(color === "blue" ? "color is blue" : "not a match");

// js loops
// for (condition) {
//     codeblock
// }
// for (intializer; boundary; increment) {
//     codeblock
// }

// gives all the numbers from 0 to 10
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // gvies all even numbers btw 0 and 10
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// // gvies all odd numbers btw 0 and 10
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// let items = ["chocolate", "milk", "butter", "sugar"];

// console.log(items);

// console.log(items[0]);

// items.push("nuts");
// items.push("cornflakes");
// items.push("peanut butter");
// console.log(items);

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }
// for (let i = 0; i < items.length; i++) {
//   if (items[i] == "milk") {
//     console.log("there is a milk in your items");
//     continue;
//   }
//   console.log(items[i]);
// }

// let i = 20;

// while loop
// while (condition) {
//   codeblock;
//   increment;
// }

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// while (i < items.length) {
//   console.log(items[i]);
//   i++;
// }

// do while loop syntax
// do {
//   codeblock;
// } while (condition);

// let i = 11;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// when to use a for loop and while loop

// break and continue statement
// for (let i = 0; i <= 10; i++) {
//   if (i === 8) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 8) {
//     continue;
//   }
//   console.log(i);
// }

// let students = ["mark", "francis", "john", "paul", "cindy"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// let i = 0;

// while (i < students.length) {
//   console.log(students[i]);
//   i++;
// }

// for (let i of students) {
//   console.log(i);
// }

// for (let i in students) {
//   console.log(students[i]);
// }

// students.forEach((name) => {
//   console.log(name);
// });

// students.map((name) => {
//   console.log(name);
// });

// alert("hello world");
// console.log("hello console");

// prompt("what is your name?");

// write a code that prompts a user to enter
// his or her name and it should print the
// name on the console.

// e.g
// Godbless, welcome to pluralcode academy

// soln
// let username = prompt("what is your name?");
// console.log(username + ", welcome to plural code");

// write a money mulitiplier program that takes an amount
// and return twice the value as your interest

// alert("welcome to money doubler");
// let amount = prompt("Enter your amount");
// let newAmount = amount * 2;

// alert("Your New amount is " + newAmount);

// functions: are block codes that executes a particular task when called

// functions without prams or args
// function functionName() {
//   codeblock;
// }

// // console.log("Hello, welcome to pluralcode academy");
// function greet() {
//   console.log("Hello Dear, welcome to pluralcode academy");
// }

// // greet();
// let x = 4;
// let y = 5;

// function addNums() {
//   console.log(x + y);
// }

// addNums();

// functions with params and args
// function functionName(param) {
//   codeblock;
// }

// function greet(name) {
//   console.log("Hello " + name + ", welcome to pluralcode academy");
// }

// greet("Godbless");
// greet("Maxwell");
// greet("John");

// function addNums(x, y) {
//   let z = x + y;
//   console.log("The sum of " + x + " and " + y + " is " + z);
// }

// addNums(2, 3);
// addNums(10, 33);
// addNums(8, 9);

// every functions is supposed to have a return key word
// uses of the return key word
// 1) it saves the value in memory of the function
// 2) it blocks or stops further codes from running

// function greet() {
//   return "Hello welcome";
// }

// console.log(greet());

// assignments
// 1) write a function that converts temerature
//  in kelvin to celcius

// arrow function

// const functionName = (param) => {};

const greet = () => {
  return "hello world";
};

const addNums = (x, y) => {
  return x + y;
};

console.log(greet());
console.log(addNums(6, 7));
