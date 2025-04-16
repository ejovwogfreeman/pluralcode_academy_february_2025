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

let person = {
    id: 1,
    name: 'godbless',
    email: 'ejovwogfreeman007@gmail.com',
    score: 75,
    isPromoted: true,
    sub_combination: ['html', 'css', 'js']
}

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