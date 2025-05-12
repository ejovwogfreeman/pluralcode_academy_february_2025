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
// function greet(name, callback) {
//   console.log("hi " + name);
//   callback();
// }

// function callback() {
//   console.log("this is a callback");
// }

// greet("GB", callback);

// setTimeout(() => {});

// document.getElementById("id").addEventListener("click", () => {});

// js promise
// const myPromise = new Promise((resolve, reject) => {
//   if (/* success */) {
// resolve("Success");
//   } else {
//     reject("Error");
//   }
// });

// const myPromise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve("success running code");
//   } else {
//     reject("error running code");
//   }
// });

// myPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("operations competed"));

// async function getData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error("Error :" + err);
//   }
// }

// getData();

// REQUEST METHOD:
// 2) POST            C
// 1) GET             R
// 3) PUT OR PATCH    U
// 4) DELETE          D

// async function postData() {
//   try {
//     const res = await fetch("http://myapi.com/blog", {
//       method: "POST",
//       headers: {
//         "Content-Type": "appliction/json",
//       },
//       body: {
//         title: "my first blog",
//         body: "my blog content",
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// // local and session storage:

// // localStorage.setItem(key, value)

// localStorage.setItem("firstName", JSON.stringify({ name: "gb" }));

// // localStorage.getItem(key)

// console.log(JSON.parse(localStorage.getItem("firstName")));

// // localStorage.removeItem(key)

// localStorage.removeItem("firstName");

// sessionStorage.setItem(key, value);
// sessionStorage.getItem(key);
// sessionStorage.removeItem(key);
