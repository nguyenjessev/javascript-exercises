function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (nums) {
	return nums.reduce((total, num) => {
		return total+num;
	}, 0);
}

function multiply () {
	
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}