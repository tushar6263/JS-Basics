// JavaScript has 2 main types: Primitive and Non-Primitive

// 🔹 Primitive Data Types

let name = "Tushar";        // String
let age = 21;               // Number
let isStudent = true;       // Boolean
let salary = null;          // Null (intentional empty value)
let city;                   // Undefined (no value assigned yet)
let uniqueId = Symbol("id"); // Symbol (unique identifier)
let bigNumber = 12345678901234567890n; // BigInt (large numbers)

// 🔹 Non-Primitive Data Types

let person = {              // Object
  name: "Tushar",
  age: 21
};

let colors = ["red", "blue", "green"]; // Array (special object)

function greet() {          // Function (also object type)
  console.log("Hello!");
}

// 🔹 Check types
console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isStudent);   // boolean
console.log(typeof salary);      // object (this is a known JS bug)
console.log(typeof city);        // undefined
console.log(typeof uniqueId);    // symbol
console.log(typeof bigNumber);   // bigint