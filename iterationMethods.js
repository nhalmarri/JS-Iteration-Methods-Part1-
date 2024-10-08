//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

//Task 1
/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

//Q1
numbersGreater = numbers.filter(function (num) {
  return num >= 25;
});

console.log(numbersGreater);

//Q2
numbersDiv = numbers.filter(function (num) {
  return num % 5 === 0;
});

console.log(numbersDiv);

//Task 2

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

//Q3
const numberSquared = numbers.map(function (number) {
  return number * number;
});

console.log(numberSquared);

//4

const numberMulti = numbers.map(function (number) {
  return number * 2;
});

console.log(numberMulti);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

//Q5
numbersGreater = numbers.filter(function (num) {
  return num >= 20;
});

const test5 = numbers.map(function (numbersGreater) {
  return numbersGreater * 2;
});

console.log(test5);

//Q6
const test6 = numbers.map(function (numbersDiv) {
  return numbersDiv * 3;
});

console.log(test6);
