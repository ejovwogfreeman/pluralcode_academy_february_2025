// setTimeout(() => console.log("hello"), 3000);

// console.log(1);
// console.log(2);
// console.log(3);

// callbacks
// function greet(name, callback) {
//   console.log("hi " + name);
//   callback();
// }

// greet("Gb", function () {
//   console.log("this is a callback");
// });

// breaking it down
function greet(name, callback) {
  console.log("hi " + name);
  callback();
}

function callback() {
  console.log("this is a callback");
}

greet("GB", callback);

setTimeout(() => {});

document.getElementById("id").addEventListener("click", () => {});
