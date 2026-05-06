// ES6 introduced modern JavaScript features

// 🔹 let and const (block scope)
let a = 10;         // can change
const b = 20;       // cannot change

// 🔹 Arrow Function
const add = (x, y) => x + y;

// 🔹 Template Literals
let user = "Tushar";
console.log(`Hello ${user}`);

// 🔹 Destructuring
let person = { name: "Tushar", age: 21 };
let { name, age } = person;

// 🔹 Spread Operator
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];

// 🔹 Default Parameters
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

// 🔹 Classes
class Student {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
}

let s1 = new Student("Tushar");
s1.sayHi();

// 🔹 Promises
let promise = new Promise((resolve, reject) => {
  resolve("Done");
});

promise.then(result => console.log(result));

// 🔹 Modules (export/import)
// export const pi = 3.14;
// import { pi } from './file.js';