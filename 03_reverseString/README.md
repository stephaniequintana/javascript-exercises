# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___
## Exercise 03 - Reverse a String

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there')

  // returns 'ereht olleh'
```
___
## **spoiler alert: solution below**
### All Tests Passed:
```javascript
const reverseString = function(str) {
  return str.split('').reverse().join('');
};
```
