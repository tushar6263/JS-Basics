// let matchscore = '100';
// console.log(typeof matchscore);

// let numberScore = Number(matchscore);
// console.log(typeof numberScore);


// const runs = null;
// console.log(typeof runs);
// let stringRuns = String(runs);
// console.log(typeof stringRuns);


// const name = 'abhishek';
// const nameNumber = Number(name);
// console.log(typeof nameNumber);


// const bool = '';
// console.log(typeof bool);

// const Booleanbool = Boolean(bool);
// console.log(typeof Booleanbool);
// console.log(Booleanbool);


// // 1--- true    0---- false
// // ' '----false   'tushar' ---- true
// // 3 ---- true



// ===============================
// JavaScript Operators Examples
// ===============================

// -------------------------------
// 1. Arithmetic Operators
// -------------------------------

let a = 10;
let b = 5;

console.log("Addition:", a + b);         // 15
console.log("Subtraction:", a - b);      // 5
console.log("Multiplication:", a * b);   // 50
console.log("Division:", a / b);         // 2
console.log("Modulus:", a % b);          // 0
console.log("Exponent:", a ** b);        // 100000
console.log("Increment:", ++a);          // 11
console.log("Decrement:", --b);          // 4


// -------------------------------
// 2. Assignment Operators
// -------------------------------

let x = 10;

x += 5;   // x = x + 5
console.log("+= :", x);

x -= 2;   // x = x - 2
console.log("-= :", x);

x *= 2;   // x = x * 2
console.log("*= :", x);

x /= 2;   // x = x / 2
console.log("/= :", x);

x %= 3;   // x = x % 3
console.log("%= :", x);


// -------------------------------
// 3. Comparison Operators
// -------------------------------

let num1 = 10;
let num2 = "10";

console.log("Equal (==):", num1 == num2);         // true
console.log("Strict Equal (===):", num1 === num2); // false
console.log("Not Equal (!=):", num1 != num2);      // false
console.log("Strict Not Equal (!==):", num1 !== num2); // true
console.log("Greater Than:", num1 > 5);            // true
console.log("Less Than:", num1 < 20);              // true
console.log("Greater or Equal:", num1 >= 10);      // true
console.log("Less or Equal:", num1 <= 9);          // false


// -------------------------------
// 4. Logical Operators
// -------------------------------

let isLoggedIn = true;
let isAdmin = false;

console.log("AND (&&):", isLoggedIn && isAdmin); // false
console.log("OR (||):", isLoggedIn || isAdmin);  // true
console.log("NOT (!):", !isLoggedIn);            // false


// -------------------------------
// 5. String Operators
// -------------------------------

let firstName = "Tushar";
let lastName = "Patel";

console.log("Concatenation:", firstName + " " + lastName);


// -------------------------------
// 6. Ternary Operator
// -------------------------------

let age = 18;

let result = age >= 18 ? "Adult" : "Minor";
console.log("Ternary Result:", result);


// -------------------------------
// 7. Type Operators
// -------------------------------

console.log("Type Of:", typeof firstName); // string

let arr = [1, 2, 3];
console.log("Instance Of:", arr instanceof Array); // true


// -------------------------------
// 8. Bitwise Operators
// -------------------------------

let p = 5; // 0101
let q = 1; // 0001

console.log("Bitwise AND:", p & q); // 1
console.log("Bitwise OR:", p | q);  // 5
console.log("Bitwise XOR:", p ^ q); // 4
console.log("Left Shift:", p << 1); // 10
console.log("Right Shift:", p >> 1); // 2


// -------------------------------
// 9. Nullish Coalescing Operator
// -------------------------------

let username = null;

console.log("Nullish Coalescing:", username ?? "Guest");


// -------------------------------
// 10. Optional Chaining
// -------------------------------

let user = {
  profile: {
    email: "tushar@example.com"
  }
};

console.log("Optional Chaining:", user?.profile?.email);


// -------------------------------
// 11. Spread Operator
// -------------------------------

let nums = [1, 2, 3];
let newNums = [...nums, 4, 5];

console.log("Spread Operator:", newNums);


// -------------------------------
// 12. Destructuring
// -------------------------------

let person = {
  name: "Tushar",
  city: "Bhopal"
};

let { name, city } = person;

console.log("Destructuring:", name, city);