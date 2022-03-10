# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___

## Exercise 02 - repeatString

Write a function that simply repeats the string a given number of times:

```javascript
repeatString('hey', 3)
  // returns 'heyheyhey'
```
___
## **spoiler alert: solution below**
### All Tests Passed:
```javascript
const repeatString = function(str, num) {
    if(num === 0 || num === null) return '';
    if(num < 0) return "ERROR";
    if(num === 1){
        return str;
        } else {
            let newStr = str
            for(let i = 1; i < num; i++){
                newStr += str;
            }
            return newStr;
        }
};
```
