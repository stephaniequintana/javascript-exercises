# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___
## Exercise 09 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```
## **spoiler alert: solution below**
### All Tests Passed:
```javascript
const palindromes = function (str) {
    //remove punctuation and spaces:
  let stripped = str.replace(/[^\p{L}\s]/gu, "")
                    .replace(/\s+/g, "")
                    .toLowerCase();
    //reverse string:
  let reversed = stripped.split("").reverse().join("");
    //compare:
  if ((stripped.toLowerCase().localeCompare(reversed)) === 0){
    return true;
  }
  return false;
};

```
