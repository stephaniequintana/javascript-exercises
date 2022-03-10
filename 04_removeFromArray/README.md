# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___
## Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3);

  // should remove 3 and return [1,2,4]
```
___
## **spoiler alert: solution below**
### All Tests Passed:
```javascript
const removeFromArray = function(arr, ...args) {
  const answer = [];
  return arr.reduce((all, item, index) =>{
    if(!(args.includes(item))) {
      all.push(item);
    }
    return all;
  }, []);
}
```
