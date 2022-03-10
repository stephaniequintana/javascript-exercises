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
// npm test leapYears.spec.js
// Do not edit below this line
module.exports = leapYears;
