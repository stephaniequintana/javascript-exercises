const removeFromArray = function(arr, ...args) {
  const answer = [];
  return arr.reduce((all, item, index) =>{
    if(!(args.includes(item))) {
      all.push(item);
    }
    return all;
  }, []);
}
//try this with set!!!
// npm test removeFromArray.spec.js --silent
// Do not edit below this line
// module.exports = removeFromArray;
