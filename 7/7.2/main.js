let mult = function mult(a, b, c, d) { 
    return a * b * c * d; 
};

function partitial(func, ...arr) {
	return function(...arrArg) {
		return func.apply(null, arr.concat(arrArg));
	};
}

console.log(mult(2, 3, 4, 5)); // 120
mult23 = partitial(mult, 2, 3);
console.log(mult23(4, 5)); //120 