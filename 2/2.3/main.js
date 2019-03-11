
// function polidrom checking word via method push()
function pollindrom(word) {
	var reverseArr = [];
	var arr = word.split('');
	for(var i = arr.length - 1; i >= 0; i--) {
		reverseArr.push(arr[i]);
	}
	if (reverseArr.join('') === word) {
		alert('Полиндром');
	}
	else {
		alert('Не полиндром');
	}
    
}

pollindrom('фаф');

// function polidrom checking word via method unshift()
function pollindrom2(word) {
	var reverseArr = [];
	var arr = word.split('');
	for(var i = 0; i <= arr.length; i++) {
		reverseArr.unshift(arr[i]);
	}
	if (reverseArr.join('') === word) {
		alert('Полиндром');
	}
	else {
		alert('Не полиндром');
	}
    
}

pollindrom2('лалалал');

// function polidrom checking word via method slice()
function polindrom3 (word) {
	var reverseArr = [];
	var arr = word.split('');
	reverseArr = arr.slice(0, arr.length).reverse();
	if (reverseArr.join('') === word) {
		alert('Полиндром');
	}
	else {
		alert('Не полиндром');
	}

}

polindrom3('fdf');

// function polidrom checking word via method forEach and unshift 
function polindrom4 (word) {
	var reverseArr = [];
	var arr = word.split('');
	arr.forEach((e) => {
		reverseArr.unshift(e);
	});
	if (reverseArr.join('') === word) {
		alert('Полиндром');
	}
	else {
		alert('Не полиндром');
	}
}

polindrom4('vjv');

// function polidrom checking word via method ...array
function polindrom5 (word) {
	var arr = word.split('');
	var reverseArr = [...arr.reverse()];
	if (reverseArr.join('') === word) {
		alert('Полиндром');
	}
	else {
		alert('Не полиндром');
	}
}

polindrom5('ava');

