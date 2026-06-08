// 126_Objects_Creation.js
// Creating objects using literal and constructor forms
const carLiteral = { make: "Toyota", model: "Corolla" };
const carConstructor = new Object();
carConstructor.make = "Honda";
carConstructor.model = "Civic";
console.log(carLiteral, carConstructor);
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (c === d) {
    console.log("true");
} else {
    console.log("false");
}