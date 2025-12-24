const convertToCelsius = function(fahrenheit) {
  let number = ((fahrenheit - 32) * 5) / 9;
  let rounded = Math.round(number * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(celsius) {
  let number =  (celsius * 9) / 5 + 32;
  let rounded = Math.round(number * 10) / 10;
  return rounded;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
