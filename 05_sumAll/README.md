# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___
## Exercise 05 - sumAll

Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4)
// returns the sum of 1 + 2 + 3 + 4 which is 10
```


## **spoiler alert: solution below**
### All Tests Passed:
```javascript
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
```
