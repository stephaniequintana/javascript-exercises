const fibonacci = function(num) {
  if(num <= 0) return 'OOPS';
  const series = [1, 1,];
  for(let i = 0; i <= num; i++){
    series.push(series[i] + series[i + 1]);
  }
  return series[num - 1];
};
// npm test fibonacci.spec.js
// Do not edit below this line
module.exports = fibonacci;
