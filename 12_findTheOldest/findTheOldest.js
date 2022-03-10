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
// npm test findTheOldest.spec.js
// Do not edit below this line
module.exports = findTheOldest;
