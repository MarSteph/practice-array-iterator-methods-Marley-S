// Task 1
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
let firstFruit = fruits.shift();
fruits.unshift("grape");
console.log(fruits);

// Task 2
let colors = ["red", "blue", "green", "blue", "yellow"];
let includesResult = colors.includes("blue");
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");
let result = [includesResult, firstIndex, lastIndex];
console.log(result);
