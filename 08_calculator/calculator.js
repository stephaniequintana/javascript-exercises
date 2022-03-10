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
// npm test calculator.spec.js
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
