# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___
## Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

## **spoiler alert: solution below**
### All Tests Passed:
```javascript
const findTheOldest = function(arr) {
  let thisYear = new Date().getFullYear();
  let agesArr = arr.reduce((all, item) => {
    let deathYear = item.yearOfDeath? item.yearOfDeath : thisYear;
    all.push(deathYear - item.yearOfBirth);
    return all;
  }, []);

  let oldestIndexedAt = agesArr.indexOf(Math.max(...agesArr));
  console.log(arr[oldestIndexedAt].name);
  return arr[oldestIndexedAt];
};

```
