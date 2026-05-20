//About String and its methods
const a = "tushar";
const b = new String("tushar");

console.log(typeof a); // string
console.log(typeof b); // object

console.log(a === "tushar"); // true
console.log(b === "tushar"); // false

console.log(b.valueOf()); // tushar


const Name = new String ('Tushar');

console.log(Name.valueOf());
console.log(Name.toUpperCase())
console.log(Name.indexOf('h'));
console.log(Name.charAt(4));
const newName = (Name.substring(0,4));
console.log(newName);
const sliceName = (Name.slice(-4,3));
console.log(sliceName)

const trimName = '             tushar        ';
console.log(trimName);
console.log(trimName.trim());

const url = 'https://tc39%20es/';
console.log('url') 
console.log(url.includes('%20'))
console.log(url.replace('%20','?'))