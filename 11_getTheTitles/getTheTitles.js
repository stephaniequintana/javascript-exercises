const getTheTitles = function(arr) {
  return arr.reduce((all, item) => {
    all.push(item.title);
    return all;
  }, [])
};
// npm test getTheTitles.spec.js
// Do not edit below this line
module.exports = getTheTitles;
