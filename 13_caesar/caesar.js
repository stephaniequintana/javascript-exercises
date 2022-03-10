const caesar = function(str, num) {
  if(num > 26 || num < -26){
    num = num % 26;
  }
  let length = str.length;
  let newStr = '';
  for(let i = 0; i < length; i++){
    let code = str.charCodeAt(i);
    let newCode = code + num;

    if(code >= 65 && code <= 90){
      if(newCode > 90) {
        fixedCode = 64 + (newCode - 90);
        newStr += String.fromCharCode(fixedCode);
      } else if(newCode < 65){
        fixedCode = 91 - (65 - newCode);
        newStr += String.fromCharCode(fixedCode);
      } else {
        newStr += String.fromCharCode(newCode);
      }
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
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

// npm test caesar.spec.js
// Do not edit below this line
module.exports = caesar;
