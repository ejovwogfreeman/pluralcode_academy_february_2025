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

// const greet = () => {
//   return "hello world";
// };

// const addNums = (x, y) => {
//   return x + y;
// };

// console.log(greet());
// console.log(addNums(6, 7));

// function greet(name, time) {
//   return "Hello " + name + ", good " + time;
// }

// const greet = (name, time) => {
//   return `Hello ${name} good ${time}`;
// };

// console.log(greet("Godbless", "morning"));
// console.log(greet("Maxwell", "evening"));

// function greetPerson(name) {
//   return "Hello " + name;
// }

// console.log(greetPerson("Godbless"));
// console.log(greetPerson("Freeman"));
// console.log(greetPerson("Powell"));

// 8 lines of code

// function cleanBoard(name = "Godbless") {
//   return name + ", clean the board";
// }

// console.log(cleanBoard("Maxwell"));
// console.log(cleanBoard());
// console.log(cleanBoard());

// let numSum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(numSum(4, 10));

// temp in k to c
// function kelvinToCelcius(kelvinTemp) {
//   return `The tem ${kelvinTemp}k in celcius is ${kelvinTemp - 273}`;
// }

// // 20k to cel
// // temp in c to k
// function celciusToKelvin(celciusTemp) {
//   return `The tempearture ${celciusTemp}celcius in kelvin is ${
//     celciusTemp + 273
//   }`;
//   // return "The tem " + celciusTemp + "celcius in kelvin is " + celciusTemp + 273;
// }

// console.log(celciusToKelvin(20));

// function dollarToNaira(dollar) {
//   return dollar * 1600;
// }

// console.log(dollarToNaira(50));

// // global scoped
// let items = [];

// function addItem(item) {
//   items.push(item);
//   console.log(items);
// }

// console.log(item); //local variable not accessible outside the function

// addItem("butter");

// addItem("peanut butter");

// addItem("jam");

// if (true) {
//   var blockvar = "hello world";
// }

// for(){}

// while(){

// }

// function(){

// }

// console.log(blockvar);

// let x = 3;

// function accessX() {
//   var y = 5; // local scoped
//   return "x is " + x;
// }

// console.log(accessX());
// console.log(y); // local scoped

// if (true) {
//   var y = 5;
// }

// console.log(y);

// 1) any variable declared outside a function is globally scopoed
// 2) any variable declared inside a function is locally scoped
// 3) let and const are block scoped e.g if
// 4) function scope var

// block scope (let and const)

// function testScope() {
//   if (true) {
//     let blockScope = "I exist only in this block";
//     const blockScope2 = "I exist in this scope too";

//     // console.log(blockScope);
//     // console.log(blockScope2);
//   }

//   console.log(blockScope);
//   console.log(blockScope2);
// }

// testScope();

// function scope

// function testScope() {
//   if (true) {
//     var funcScope = "I am a func scope";
//     console.log(funcScope);
//   }
//   console.log(funcScope);
// }

// testScope();

// functions are hosited (to the top)

// we can use a function even before delcaring it
// testFunc();

// function testFunc() {
//   console.log("hello test func");
// }

// console.log(x);

// let x = 6;

// reoucrring ()
// timer

// function outer() {
//   let outerVar = "outer variable";

//   function inner() {
//     return outerVar;
//   }

//   return inner;
// }

// let outerRes = outer();

// let innerRes = outerRes();

// console.log(innerRes);

// function greet() {
//   return "Hello world";
// }

// console.log(greet());

// function counter() {
//   let count = 0;

//   function increase() {
//     count += 1;
//     console.log("the current count is " + count);
//   }

//   return increase;
// }

// let increase = counter();
// increase();
// increase();
// increase();

// call back function (when you call a function inside another function)

// s

// closure (wen you define a function inside another function and return the new function inside the old function )
// closure (when the return statement of a function is a function)

// function createPerson(name) {
//   function greetPerson() {
//     console.log("Hello my name is " + name);
//   }
//   return greetPerson;
// }

// createPerson("John")();

// function createPerson2(name) {
//   return greetPerson(){

//   }
// }

// function counter() {
//   let count = 0;

//   function incCount() {
//     count += 1;
//     console.log(count);
//   }

//   return incCount;
// }

// let inc = counter();
// inc();
// inc();
// inc();

// let myArr = ["Godbless", "Miracle", "Chidinma", "Khaleed", "Ojo"];

// let myArr = new Array("Godbless", "Miracle", "Chidinma", "Khaleed", "Ojo");

// console.log(myArr[0]); //gives the first item
// console.log(myArr[myArr.length - 1]); //gives the last item

// array methods
// push() -> adds to the end of an array

// myArr.push("Billy", "Maxwell", "Joseph");

// console.log(myArr);

// // pop() -> removes from the end of an array

// myArr.pop();
// myArr.pop();
// console.log(myArr);

// // shift()-> removes from the beginning

// myArr.shift();
// myArr.shift();
// console.log(myArr);

// // unshift()-> adds to the beginning of an array

// myArr.unshift("Mark Powell", "Robert", "Stark");

// console.log(myArr);

// let myArr = ["Godbless", "Miracle", "Chidinma", "Khaleed", "Ojo"];
// console.log(myArr);

// slice -> removes part of an array but returns the initial array when the array is called
// i.e slice does not mutate the array
// it takes start and end index

// let slicedArr = myArr.slice(0, 3);
// let slicedArr2 = myArr.slice(2, 3);
// console.log(slicedArr2);

// splice -> removes part of an array and returns the remaining element when the array is called
// i.e splice mutates the array
// it takes start index and length)

// let splicedArr = myArr.splice(0, 3);
// console.log(splicedArr);

// console.log(myArr);

// let myArr = ["Godbless", "Miracle", "Chidinma", "Khaleed", "Ojo"];

// myArr.splice(1, 1, "newname", "newnameagain", "allover");

// console.log(myArr);

// console.log(myArr.indexOf("Khaleed"));

// indexOf() -> a method that returns the index of an element in an array

// arrat iteration methods
// looping throug arrays

// forEach()

// myArr.forEach((name) => console.log(name));

// myArr.forEach((name, index) => {
//   console.log(name + " - " + index);
// });

// myArr.forEach(function (name) {
//   console.log(name);
// });

// let myFunc = function () {};

// let myFunc = ()=> {

// }

// function myFunc(){

// }

// myArr.map((name) => {
//   console.log(name);
// });

// let filteredArr = myArr.filter((x) => x !== "Miracle");

// let filteredArr = [];
// for (let i = 0; i < myArr.length; i++) {
//   if (myArr[i] !== "Miracle") {
//     filteredArr.push(myArr[i]);
//   }
// }

// console.log(filteredArr);

// console.log(filteredArr);

// let scores = [90, 88, 78];

// let aggregate = scores.reduce((a, b) => a + b, 0);

// console.log(aggregate);

// console.log(aggregate);
// let aggregate = 0;
// for (let i = 0; i < scores.length; i++) {
//   aggregate += scores[i];
// }

// console.log(aggregate);

// let scores = [90, 77, 10, 68, 23, 44, 79];

// scores.sort(); -> sorts in ascending by default

// scores.reverse(); //reverses an array

// let soretedArr = scores.sort((a, b) => b - a); -> sorts array in descending order (from b to a)

// console.log(soretedArr);

// let myArr = ["Godbless", "Miracle", "Chidinma", "Khaleed", "Ojo"];

// let name = myArr.find((x) => x == "Godbless");
// let name = myArr.findIndex((x) => x == "Joshua");

// let nums = [1, 2, 3, 4, 5];

// let bigNums = nums.find((x) => x > 3);

// console.log(bigNums);

// let matrix = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];

// console.log(matrix[2][0]);

// let matrix = [
//   [1, 2],
//   [3, 4],
// ];

// flat() -> reduces the dimension of an Array

// let flatArr = matrix.flat();

// console.log(flatArr);

// let arr = ["godbless", "freeman", "lancelot"];

// // console.log(typeof arr);

// console.log(Array.isArray(arr));

// arr, objecte, set and maps

// arr -> []
// obj - {}

// let person = {
//   name: "godbless",
//   age: 77,
//   isAdmin: true,
//   subjectComb: ["math", "eng", "chem", "phy"],
//   socials: {
//     fb: "gbmedia",
//     twt: "thegbmedia",
//     inst: "theg.meida",
//     emails: {
//       gmail: "gb@gmail.com",
//       yahoo: "gb@yahoo.com",
//       hotmail: "gb@hotmail.com",
//     },
//   },
// };

// dot notation and key-index methods

// console.log(person.name);
// console.log(person.subjectComb[person.subjectComb.length - 1]);

// console.log(person["age"]);

// person.school = "uniben";

// console.log(person.socials.twt);

// for (let key in person) {
//   console.log(person[key]);
// }

// console.log(person.name);

// let { name, subjectComb } = person;

// console.log(subjectComb);

// 1) var & data types
// 2) functions
// 3) loops
// 4) control flow

// assignment-> build a shopping cart that shows 4 prompt(add, remove, display and quit)
// when we type add -> it should prompt us to enter
// an item to add to our cart
// when we type remove -> it should prompt us to enter
// a name to remove from our cart and it will be removed from the cart
// when we type display -> it should display all the items on our cart
// when we type quit -> it should quit or close the program

// NB: cart is an array

// create a cart (an empty array)
// let cart = [];

// // add item function
// function addItem() {
//   let item = prompt("enter a name to add:");
//   cart.push(item);
// }

// // remove item function
// function removeItem() {
//   let name = prompt("enter a name to remove:");
//   //   item.splice(startIndex, length)
//   cart.splice(cart.indexOf(name), 1);
// }

// // display item function
// function displayItems() {
//   alert(cart);
// }

// alert("Hello welcome to gb stores");

// let question = prompt("would like to shop? (y/n): ");

// let reply;

// if (question === "y") {
//   // do something
//   while (reply !== "quit") {
//     reply = prompt("would you like to add, remove, display or quit ?");
//     if (reply === "add") {
//       addItem();
//     } else if (reply === "remove") {
//       removeItem();
//     } else if (reply === "display") {
//       displayItems();
//     } else if (reply === "quit") {
//       alert("Thnks for visiting my shop");
//     } else {
//       alert("Invalid input");
//     }
//   }
// } else {
//   alert("thanks for visiting my shop");
// }

// array
// let myArr = new Array("godbless", "freeman", "godbless");

// let mySet = new Set(["godbless", "freeman", "godbless"]);

// let mySet = new Set(); // creates a new set or empty set

// mySet.add("godbless"); //adds a new element to a set
// mySet.add("freeman"); //adds a new element to a set
// mySet.add("lancelot"); //adds a new element to a set

// console.log(mySet.has("maxwell")); //checks if a set has a certain value

// console.log(mySet);

// mySet.forEach((x) => console.log(x));

// mySet.forEach((x) => console.log(x));

// const x = mySet.values();

// let x = "";
// for (let i of mySet.values()) {
//   x += i;
// }
// console.log(x);

// console.log(mySet);

// mySet.delete("freeman");
// console.log(mySet);

// let person = {
//   name: "godbless",
//   age: 77,
//   isAdmin: true,
//   subjectComb: ["math", "eng", "chem", "phy"],
//   socials: {
//     fb: "gbmedia",
//     twt: "thegbmedia",
//     inst: "theg.meida",
//     emails: {
//       gmail: "gb@gmail.com",
//       yahoo: "gb@yahoo.com",
//       hotmail: "gb@hotmail.com",
//     },
//   },
// };

// console.log(person);

// let myMap = new Map(); //creates a new map
// myMap.set("name", "Godbless"); //add element to a map

// crating a simple map
// let myMap = new Map([
//   ["name", "godbless"],
//   ["school", "pluralcode"],
//   [2001, "first Company"],
// ]);

// let myMap = new Map();
// myMap.set("name", "godbless");
// myMap.set("company", "pluralcode");
// myMap.set(2001, "first company");

// console.log(myMap);

// myMap.forEach((val, key) => {
//   console.log(`${key} - ${val}`);
// });

// let arr = ["godbless", "freeman", "lancelot"];
// arr.forEach((name, index) => {
//   console.log(`${index} - ${name}`);
// });

// Set, Map, Array, Object;

// console.log(myMap.get("company"));

// mini task (assignment) (NB: it should promot you to enter an input)
// Assuming you're managing a party and you need to do the following:
// 1) keep track of unique guests using a set
// 2) store additional details like age and RSVP status using map

// HINTS:
// 1) add guests to set (to avoid duplicates)
// 2) store guest details (name->{age, rsvp}) in a map
// 3) list all guests
// 4) remove a guest
// 5) check if a guest is invited

// js strings
// let myStr = "abcXYZ1234567";
// let myStr2 = 'abcxyz';
// let myStr3 = `abcxyz`;

// length property
// console.log(myStr.length);

// accessing string elements
// every first character of a string
// console.log(myStr[0]);

// every last character of string
// console.log(myStr[myStr.length - 1]);

// charAt
// console.log(myStr.charAt(0)); //gives first character of a string
// console.log(myStr.charAt(myStr.length - 1)); // gives last charter of a string

// indexOf
// console.log(myStr.indexOf("a"));
// console.log(myStr.indexOf("b"));

// myStr += "d";

// slice(startIndex, endIndex) -> similar to array slice
// stubstring(startIndex, endIndex) -> similar to array slice
// console.log(myStr.slice(4, 5));
// console.log(myStr.substring(4, 5));

// stubstr(startIndex, length) -> similar to array splice

// console.log(myStr.substr(0, 3));
// console.log(myStr.substr(3, 5));

// console.log(myStr.toLocaleUpperCase());
// console.log(myStr.toLocaleLowerCase());

// let name = "godbless";
// let name2 = " god bless ";

// console.log(name.length);
// console.log(name2.length);

// console.log(name2.trim()); // removes white spaces at the edge of the string

// split methods -> converts strings to array

// let name = "godbless";

// console.log(name.split(""));

// let email = "freeman007@compnany.net";

// let username = email.split("@")[0];

// console.log(username);

// let name = "godbless";

// console.log(name.replace("god", "jesus"));

// /\d+/g

// let regex = /\d+/g;

// console.log("Price: 100 usd".match(regex));

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// console.log(numberWithCommas(1000000));

// date and time object
// let completeCurrentDateAndTime = new Date();

// console.log(completeCurrentDateAndTime);

// let year = new Date().getFullYear();
// let day = new Date().getDay();

// [0, 1, 2, 3, 4, 5, 6];
// let days = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

// console.log(days[new Date().getDay()]);

// let month = new Date().getUTCMonth();

// let months = ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"];

// console.log(months[month]);

// let date = new Date().getDate();

// console.log(date);

// let time = new Date().getTime();

// console.log(time);

// let date = new Date().toDateString();

// console.log(date);

// let hour = new Date().getHours();

// console.log(hour);

// math object
// console.log(Math.round(123.4)); // rounds off a number
// console.log(Math.ceil(123.1)); // rounds up a number
// console.log(Math.floor(123.7)); // rounds down a number
// console.log(Math.pow(2, 5)); // gives power i.e 2 ** 5
// console.log(Math.sqrt(9)); // sqrt of 9 as 3
// console.log(Math.sqrt(6)); //sqrt of 6 as 2.4
// console.log(Math.sqrt(16)); //sqrt of 16 as 4
// console.log(Math.max(91, 17)); // max which is 91
// console.log(Math.min(1, 17)); // min which is 1
