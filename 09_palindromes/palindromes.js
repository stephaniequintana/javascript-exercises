const palindromes = function (str) {
    //remove punctuation and spaces:
  let stripped = str.replace(/[^\p{L}\s]/gu, "").replace(/\s+/g, "").toLowerCase();
    //reverse string:
  let reversed = stripped.split("").reverse().join("");
    //compare:
  if ((stripped.toLowerCase().localeCompare(reversed)) === 0){
    return true;
  }
  return false;
};
// npm test palindromes.spec.js
// Do not edit below this line
module.exports = palindromes;
