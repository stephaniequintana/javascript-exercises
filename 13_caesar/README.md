# The Odin Project - Foundations Course
These exercises are part of the JS Basic section of the The Odin Project foundations course. These are an excellent refresher and can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4).
___
## Exercise 13 - Caesar cipher

Implement the legendary Caesar cipher:

> In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

```javascript
caesar('A', 1) // simply shifts the letter by 1: returns 'B'
```

the cipher should retain capitalization:
```javascript
caesar('Hey', 5) // returns 'Mjd'
```

should _not_ shift punctuation:
```javascript
caesar('Hello, World!', 5) //returns 'Mjqqt, Btwqi!'
```

the shift should wrap around the alphabet:
```javascript
caesar('Z', 1) // returns 'A'
```

negative numbers should work as well:
```javascript
caesar('Mjqqt, Btwqi!', -5) // returns 'Hello, World!'
```
## **spoiler alert: solution below**
### All Tests Passed:
```javascript
const caesar = function(str, num) {
  if(num > 26 || num < -26){
    num = num % 26;
  }
  let length = str.length;
  let newStr = '';
  for(let i = 0; i < length; i++){
    let code = str.charCodeAt(i);
    let newCode = code + num;
                                        //capital letters:
    if(code >= 65 && code <= 90){
      if(newCode > 90) {
        fixedCode = 64 + (newCode - 90);
        newStr += String.fromCharCode(fixedCode);
      } else if(newCode < 65){
        fixedCode = 91 - (65 - newCode);
        newStr += String.fromCharCode(fixedCode);
      } else {
        newStr += String.fromCharCode(newCode);
      }                                 //lowercase letters:
    } else if(code >= 97 && code <= 122){
      if(newCode > 122) {
        fixedCode = 96 + (newCode - 122);
        newStr += String.fromCharCode(fixedCode);
      } else if(newCode < 97){
        fixedCode = 96 + (97 - newCode);
        newStr += String.fromCharCode(fixedCode);
      } else {
        newStr += String.fromCharCode(newCode);
      }
    } else {                            //all other characters:
      newStr += str[i];
    }
  }
  return newStr;
};

```
