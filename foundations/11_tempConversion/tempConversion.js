const convertToCelsius = function(tempf) {
  let conc = ((tempf - 32) * 5/9);
  let rounded = Number((conc).toFixed(1));
  return rounded;
};

convertToCelsius(32);

const convertToFahrenheit = function(tempc) {
  let conf = ((tempc * (9/5)) + 32);
  let rounded2 = Number((conf).toFixed(1));
  return rounded2;
};

convertToFahrenheit();

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
