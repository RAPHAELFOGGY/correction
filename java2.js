let isloggedin = true;
if (isloggedin == true) {
  console.log("Welcome back");
} else {
  console.log("Please log in .");
}

// Ternary Operator (? :)
// A shorter way to write if .... else

let isloggedin2 = true;
console.log(isloggedin2 ? "Welcome back!" : "Please log in .");

// E. switch statementd
// used when multiple conditions depend on a single value or onw variable

let day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

// Note: Always use breaks ; to prevent fall - through

// Loops
// Loops help execute a block of code multiple times .

// for loop
// Used when the number of interaction is known .

for (let i = 1; i <= 5; i++) {
  console.log("Iteraciton:", i);
}
// while loop
// Execute as long as a condition is true

let count = 1;
while (count <= 8) {
  console.log("count:", count);
  count++;
}

// do while loop

let num = 2;
do {
  console.log("Number:", num);
  num++;
} while (num <= 6);

for (let a = 1; a <= 5; a++) {
  if (a === 3) continue; // skips 3
  console.log(a);
}

for (let i = 0; i < 21; i += 3) {
  console.log(i);
}

function greet() {
  console.log("Hello ,World!");
}
greet();

function code() {
  console.log("Java, World!");
}
code();

function multiplication(kc, lk, st) {
  return kc * lk * st;
}
let multiply = multiplication(5, 3, 5);
console.log(multiply);

const multiply2 = function (x, y, w) {
  return x * y - w;
};
console.log(multiply2(4, 2, 5));

const subtract = (abc, bcf) => abc - bcf;
console.log(subtract(10, 3));

const greetuser1 = (name) => {
  console.log("Hello ", name);
  console.log("Welcome");
};
greetuser1("Alice");

const greetuser = (name) => {
  console.log("Hello", "Alice", "your are Welcome ");
};
greetuser("Alice");

// IIFE (Immediately Involked Function Expression)
(function () {
  console.log("This runs immediately!");
})();

(function (name) {
  console.log(`Hello, ${name}!`);
})("Muodozie , Raphael Somtochukwu");

//  summary
//  function Type Syntax Hosting
//  function Declaation   function name( ) {} yes
//  function Expression const name =  function () {} No
//  Arrow Function const name = () => {} No
//  IIFE (function(){})() yes

// JavaScript Data Structures
// Data sttructures store and organize data efficiently.Data
// The main ince in JavaScript are Arrays , Objectives, Sets , and Maps

let fruits = ["Apple", "Banana", "cherry"];
console.log(fruits[2]); // Output: Apple
console.log(fruits); // Output: Apple , Banana , Cherry

// Array Method
// .Push(Value)        Adds value at the end
// .Pop()               removes the last element
// .Shift()             removes the first element
// .unshift(value)      Adds value at the begining
// .map(fn)             creat a new array by applying fn to each element
// .filter(fn)          creat a new array with element that match fn
// .foreach(fn)         loops though array element

fruits.push("Mango");
console.log(fruits); // Output: Apple , Banana , Cherry, Mango

fruits.pop();
console.log(fruits); // Output: Apple , Banana , Cherry

fruits.shift();
console.log(fruits);

fruits.unshift("orange");
console.log(fruits);

let numbers = [1, 2, 3, 4, 5];

// Multiply each number by 2
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2,4,6,8,10]

// Get number greater than 2
let filtered = numbers.filter((num) => num > 4);
console.log(filtered); // [3,4,5]

// let arrayloop = numbers.forEach(num => num * 2);
// console.log(arrayloop);

numbers.forEach((num) => {
  console.log(num * 2);
});
// console.log(num * 3);
// console.log(num * 4);
// console.log(num * 5);

// 2.Objects and object Manipulation
// An Object is a collection of key-value pairs

let person = {
  name: "Alice",
  age: 25,
  isStudent: false,
  city: "Abuja",
};
console.log(person.age); // output:25

person.age = 26; // Update Object
person.city = "Benin";
delete person.isStudent;
console.log(person.name); // output:Alice
console.log(person.isStudent); // output:isStudent
console.log(person.age); // output:26

console.log(person.age * 3, person.city);
console.log(person);

// JavaScripts DOM Manipulation
// The Document Object Model (DOM) allows Javascripts to interact with HTML element dynamically

// 1. Selecting Elements
// 2. Changing Content and Attributes
// 3. Event Handling (addEventListener
// 4. Form Handling

// getElementById it select a single element by id
let heading = document.getElementById("java_foggy");
console.log(heading.innerText);

// querySelector & querySelectorALL

// querySelector("selector") > Selects  the first matching element
// querySelectorALL("selector") Selects all maching element

let firstParagraph = document.querySelector("p");
// let SecondParagraphs = document.querySelectorAll("p. nth-child (2");

let allParagraphs = document.querySelectorAll("p");

// code 1
console.log(firstParagraph.innerText);

// // code 2
// allParagraphs.forEach((allParagraphs) => {
//   console.log(allParagraphs.textContent);
// });

if (allParagraphs.length > 1) {
  const SecondParagraph = allParagraphs[1];
  console.log(SecondParagraph.textContent);
}

if (allParagraphs.length > 1) {
  const forthParagraph = allParagraphs[3];
  console.log(forthParagraph.textContent);
}

if (allParagraphs.length > 1) {
  const fifthParagraph = allParagraphs[4];
  console.log(fifthParagraph.textContent);
}

document.getElementById("container").innerHTML = "<h2>New Content</h2>";

// Event Handling (addEventlistener)
// Event allow user interaction with the webpage

// A. Click Event
let button = document.getElementById("myButton");
button.addEventListener("click", function (){
  alert("Button Clicked!");
});

let li = document.getElementById("hoverBox");

li.addEventListener("mouseover" , function(){
  li.style.color = "pink" ;
});

li.addEventListener("mouseout" , function (){
  div.style.color = "white";
  
})