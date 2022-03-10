# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___
## Exercise 06 - leapYears

Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

> Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
>
> -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

```javascript
leapYears(2000)
  // is a leap year: returns true
leapYears(1985)
  // is not a leap year: returns false
```
## **spoiler alert: solution below**
### All Tests Passed:
```javascript
const leapYears = function(year) {
  if((year % 4 === 0) && (year % 100 === 0)) {
    return false;
  }

  if((year % 4 === 0) && (year % 400 === 0)) {
    return true;
  }

  if(year % 4 === 0) return true;
  return false;
};

```
