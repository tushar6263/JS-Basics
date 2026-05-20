// Stack → fast, small, organized memory for primitive values and function calls.

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20



// Heap → larger, slower memory for objects, arrays, and complex data.
let user1 = {
  name: "Rahul"
};

let user2 = user1;

user2.name = "Aman";

console.log(user1.name); // Aman
console.log(user2.name); // Aman

// | Feature           | Stack                             | Heap               |
// | ----------------- | --------------------------------- | ------------------ |
// | Stores            | Primitive values + function calls | Objects & arrays   |
// | Speed             | Faster                            | Slower             |
// | Size              | Small                             | Large              |
// | Access            | Direct                            | Through references |
// | Memory Management | Automatic                         | Garbage collected  |
