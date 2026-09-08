const add = function(a, b) {

  let sum = a + b;
  return sum;
	
};

const subtract = function(a, b) {

  let difference = a - b;
  return difference;
	
};

const sum = function(arr) {

  let totalSum = arr.reduce((num1, num2) => num1 + num2 , 0);
  return totalSum;
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
