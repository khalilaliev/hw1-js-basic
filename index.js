/// LEVEL 1 ///

const age = 22;
let name = "Khalil";

console.log(age, name);

name = "Khalil Aliev";

console.log("Task Level 1:", name);

/// LEVEL 2 ///

const userName = alert(
  "My name is " + name + "," + " I am " + age + " years old!"
);

/// LEVEL 3 ///

const yourAge = prompt("How old are you?");
const yourName = prompt("What is your name?");

const personInfoResult = `My name is ${yourName}, I am ${yourAge} years old!`;

console.log("Task Level 3:", personInfoResult);

/// LEVEL 4 ///

const number1 = parseFloat(prompt("Enter a first number please!"));
const number2 = parseFloat(prompt("Enter a second number please!"));
const sumOfNumbers = number1 + number2;
console.log("Task Level 4:", sumOfNumbers);

const sum = number1 + number2;
const sub = number1 - number2;
const mul = number1 * number2;
const div = number1 / number2;

console.log(sum, sub, mul, div);
