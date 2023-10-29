const convertToCelsius = function(fahTemp) {
  // Formula: C = (F - 32) x 5/9
  let conversion = (fahTemp - 32) * (5 / 9);
  let roundedConversion = Math.round(conversion * 10) / 10
  return roundedConversion;
};

const convertToFahrenheit = function(celTemp) {
  // Formula: F = C x (9/5) + 32
  let conversion = celTemp * (9/5) + 32
  let roundedConversion = Math.round(conversion * 10) / 10
  return roundedConversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
