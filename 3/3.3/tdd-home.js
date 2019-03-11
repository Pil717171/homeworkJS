function positiveSum(array) {
	var arrPositive = [];
	var result;
	if (array == false) {
		result = 0;
	}
	array.forEach((e) => {
		if (e > 0) {
			arrPositive.push(e);
		} 
		else {
			arrPositive.push(0);
		}
		result = arrPositive.reduce((sum, current) => {
			return sum += current;
		}, 0);    
	});
	console.log(result);
	return result;
}

// var positive = document.querySelector('.positive-sum');
// positive.onclick = firstSpec;

// function firstSpec () {
// 	positiveSum([1,2,3,4,5]);
// 	positiveSum([1, -2, 3, 4, 5]);
// 	positiveSum([-1,-2,-3,-4,-5]);
// 	positiveSum([]);
// } 

function evenOrOdd (num) {
	var str = '';
	if (num % 2 === 0) {
		str = 'Even';
		console.log(str);
	}
	else {
		str = 'Odd';
		console.log(str);
	}
	return str;
}

// var event = document.querySelector('.even-or-odd');
// event.onclick = secondSpec;

// function secondSpec() {
// 	evenOrOdd(3456);
// 	evenOrOdd(653);  
// }

function centuryFromYear (year) {
	var century = 0;
	var yearString = String(year).split('');
	if (yearString.length >= 3) {
		century = yearString.splice(0, yearString.length - 2).join('');
		century = Number(century) + 1;
	}
	else {
		century = 1;
	}
	console.log(century);
	return century; 
}

// var cent = document.querySelector('.century-from-year');
// cent.onclick = thirdSpec;

// function thirdSpec () {
// 	centuryFromYear(1765);
// 	centuryFromYear(45);
// 	centuryFromYear(2019);   
// }

function arrayDiff (array, arr) {
	if (array == false) {
		array = [];
	}
	for (var index = 0; index < array.length; index++) {
		for (var i = 0; i < arr.length; i++ ) {
			if (array[index] == arr[i]) {
				array.splice(index,1);
			}
		}
	}
	console.log(array);
	return(array);
}

// var diff = document.querySelector('.array-diff');
// diff.onclick = fourthSpec;

// function fourthSpec() {
// 	arrayDiff([], [4, 5]);
// 	arrayDiff([3, 4], [3]);
// 	arrayDiff([1, 8, 2], []);
// }

