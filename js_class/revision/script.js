// alert("hello from external js");

// var

// let school = "Pluralcode";

// school = "dev";

// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");
// console.log("Hello " + school + " students");

// (var, let and const)

// var (initilaized, reassigned, redeclared)

// var name; //without a value

// name = "godbless"; //reasssignment

// console.log(name);

// var name = "Godbless"; // with a value

// name = "freeman"; //reassignment

// console.log(name);

// var name = "Billy";

// var name = "Chioma";

// let (initailze, reassign, cannot redeclare)

// let name;

// name = "something";

// let name = "godbless";

// name = "somethign else";

// let name;

// let name;

// const (cannot initialize without a value, cannot reassign, cannot redeclare)

// const name; = "value";

// const name = "freeman";

// name = "Gb";

// console.log(name);

// const name

// console.log(name);

// js data types
// primitive and reference
// primitive (string, number, boolean, undefined, null)

// string
// var name = "godbless"; // string
// var name = 'godbless' // string
// var name = `godbless`; // string

// console.log(name);

// number
// let score = 100;
// let rating = 4.5;
// let pi = 3.142;

// boolean
// let isFriend = true;
// let isFriend = false;

// let myBool = 5 == 5;

// console.log(myBool, typeof myBool);

// console.log(typeof myVar);

// let myVar;

// console.log(typeof myVar);

// let myVar = null;

// console.log(typeof myVar);

// reference data types (array, object, set, map)

// let names = ["godbless", "freeman", "lancelot"];

// let names = new Array("godbless", "freeman", "lancelot");

// console.log(names[2]);

// let person = {
//   name: "godbless",
//   school: "pluralcode",
//   course: "full stack dev",
//   subComb: ["html", "css", "js"],
//   rating: 3.9,
//   age: 75,
//   isAdmin: ture,
//   children: null,
// };

// let arr = [1, 2, 3, 3, 4, 5, 6];

// console.log(arr);

// let mySet = new Set([1, 2, 3, 3, 4, 5, 6]);

// console.log(mySet);

// let person = {
//   name: "godbless",
//   school: "pluralcode",
//   course: "full stack dev",
//   subComb: ["html", "css", "js"],
//   rating: 3.9,
//   age: 75,
//   isAdmin: ture,
//   children: null,
// };

// let myMap = new Map([
//   [1, "#ff0000"],
//   [2, "#00ff00"],
//   [3, "#0000ff"],
// ]);

// console.log(myMap);

// let name = "godbless";
// let time = "morning";

// console.log("Hello " + name + " good " + time);

// console.log(`Hello ${name} good ${time}`);

// console.log(55 % 7);
// console.log(2 ** 2);

// let x = 20;

// x += 5;

// x = x + 5;

// console.log(x);

// console.log(5 == "5"); //true
// console.log(5 === 5); //true
// console.log(5 === "5"); //false

console.log(4 == "4" && 5 > 3 && 2 < 1); //false
console.log(4 == "4" && 5 > 3 && 2 > 1); //true
console.log(!(4 == "4" && 5 > 3 && 2 < 1)); //true
console.log(!(4 == "4" && 5 > 3 && 2 > 1)); //false

console.log(7 < 7 || 5 > 20 || 2 > 1); //true
console.log(7 < 7 || 5 > 20 || 2 < 1); //false
console.log(!(7 < 7 || 5 > 20 || 2 > 1)); //false
console.log(!(7 < 7 || 5 > 20 || 2 < 1)); //true
