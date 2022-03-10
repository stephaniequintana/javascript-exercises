# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___
### Exercise 08 - Calculator

The goal for this exercise is to create a calculator that does the following:

add, subtract, get the sum, multiply, get the power, and find the factorial

## **spoiler alert: solution below**
### All Tests Passed:
```javascript
const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  if (arr.length === 0) return 0;
	return arr.reduce((all, item) => {
    all += item;
    return all;
  }, 0);
};

const multiply = function(arr) {
  if (arr.length === 0) return 0;
	return arr.reduce((all, item) => {
    all *= item;
    return all;
  }, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	let answer = 1;
	for(let i = 1; i <= x; i++){
   answer *= i;
  }
  return answer;
};

```
