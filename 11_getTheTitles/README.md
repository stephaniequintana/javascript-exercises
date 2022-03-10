# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___
## Exercise 11 - Get the Titles!

You are given an array of objects that represent books with an author and a title that looks like this:

```javascript
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
```

Your job is to write a function that takes the array and returns an array of titles:

```javascript
getTheTitles(books) // ['Book','Book2']
```
## **spoiler alert: solution below**
### The test for this assignment did NOT PASS:
I do not understand why.
```javascript
const getTheTitles = function(arr) {
  return arr.reduce((all, item) => {
    all.push(item.title);
    return all;
  }, [])
};
```
The test error output:
```javascript
Expected: ["Book", "Book2"]
    Received: undefined

      14 |
      15 | test('gets titles', () => {
    > 16 |   expect(getTheTitles(books)).toEqual(['Book','Book2']);
         |                                 ^
      17 |   });
      18 | });
      19 |

```

yet when "tested" by multipe browsers:

```javascript
console.log(getTheTitles(books));
===>>> ["Book","Book2"]
```

I am perplexed (and moving on) :)
