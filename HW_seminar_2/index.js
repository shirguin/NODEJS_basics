const lib = require("fill-random-array");

const arrayOfNumbers = lib.getFillArrayNumbers(10, 0, 100);
console.log(arrayOfNumbers);

const start = new Date(2023, 0, 1);
const end = new Date();
const arrayOfDates = lib.getFillArrayDates(30, start, end);
console.log(arrayOfDates);
