const add = function(a, b) {
  return a+b
};  

const subtract = function(a,b) {
	return a-b
};

const sum = function(a) {
	let summation = 0
  for (element of a){
    summation += element
  }
  return summation
};

const multiply = function(a) {
	let multiplication = 1
  for (element of a){
    multiplication *= element
  }
  return multiplication
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  if(a == 0){
    return 1
  }
	if( a == 1){
    return 1
  }

  return a * factorial(a-1)
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
