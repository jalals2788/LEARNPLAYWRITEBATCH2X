// 119_String_Properties.js
// Exploring string properties and indexing
let sample = "JavaScript";
console.log("Character at index 0:", sample[0]);
console.log("Character at last index:", sample[sample.length - 1]);
console.log("Includes 'Script'?:", sample.includes("Script"));
console.log("Starts with 'Java'?:", sample.startsWith("Java"));
console.log(typeof ("200"));
let str = "Hello, World!";
console.log(str.length); // Length always starts from 1, total len- 13

// Access by index
console.log(str[0]);
console.log(str[7]);
console.log(str.at(-1));
console.log(str.at(-6));

// index = 0, length = 1
console.log(str.charAt(0));
console.log(str.charCodeAt(0));