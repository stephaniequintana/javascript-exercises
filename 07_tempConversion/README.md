# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___
## Exercise 07 - tempConversion

Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
```
ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32
```

Because we are human, we want the result temperature to be rounded to one decimal place: i.e., `ftoc(100)` should return `37.8` and not `37.77777777777778`.

## **spoiler alert: solution below**
### Although, my code is the same as in the solutions folder found [here](https://github.com/TheOdinProject/javascript-exercises/blob/jest-solutions/tempConversion/tempConversion.js), the TESTS DID NOT PASS due to:
"ReferenceError: testPathIgnorePatterns is not defined"
My code:
```javascript
const ftoc = function(degrees) {
  return Math.round(((degrees - 32) * 5 / 9 * 10) / 10);
};

const ctof = function(degrees) {
  return Math.round((((degrees * 9 / 5) + 32) * 10) / 10);

```
