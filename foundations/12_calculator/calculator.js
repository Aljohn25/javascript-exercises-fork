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

const multiply = function(arr2) {

  let product = arr2.reduce((num1, num2) => num1 * num2 , 1);
  return product;

};

const power = function(a, b) {

  let totalPower = a ** b;
  return totalPower;
	
};

const factorial = function(int) {

  let factored = 1;
  for (let i = 1; i <= int; i++) {
    factored *= i;
  }
return factored;

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
