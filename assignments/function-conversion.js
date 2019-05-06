// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
const myFunction = () => "Function was invoked!"
console.log(myFunction);

// let anotherFunction = function (param) {
//   return param;
// };
const anotherFunction = (param) => param;
console.log(anotherFunction("Hello, this is a parameter!"))

// let add = function (param1, param2) {
//   return param1 + param2;
// };
const add = (var1, var2) => var1 + var2;
console.log(add(5, 37));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
const subtract = (var1, var2) => var1 - var2;
console.log(subtract(99, 12));

// Stretch

exampleArray = [1, 2, 3, 4];
// const triple = exampleArray.map(function (num) {
//     return num * 3;
// });
const triple = exampleArray.map(x => x * 3);
console.log(triple);