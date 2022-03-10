# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___
## Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4)
// returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6)
// returns 8
```
## **spoiler alert: solution below**
### All Tests Passed:
```javascript
const fibonacci = function(num) {
  if(num <= 0) return 'OOPS';
  const series = [1, 1,];
  for(let i = 0; i <= num; i++){
    series.push(series[i] + series[i + 1]);
  }
  return series[num - 1];
};

```
