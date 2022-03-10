const sumAll = function(x, y) {
  if(x < 0 || y < 0 
    || typeof(x) !== 'number' 
    || typeof(y) !== 'number'){
    return 'ERROR';
  }

  let upperBound = (x < y)? y : x;
  let lowerBound = (upperBound === y)? x : y;
  let sum = 0;
  for(let i = lowerBound; i <= upperBound; i++){
    sum += i;
  }
  
  return sum;
};
// npm test sumAll.spec.js
// Do not edit below this line
module.exports = sumAll;
