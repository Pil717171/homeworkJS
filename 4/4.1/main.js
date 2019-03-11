function remaider (a, b) {
	let result = a / b;
	let remaid = a % b;
	if (a > b) {
		if ( remaid == 0) {
			console.log('Делится. Результат деления' + ' ' + result);
		}
		else {
			console.log('Делится с остатком. Остаток от деления' + ' ' + remaid);
		}
	}
	else {
		console.log('Не делится');
	}
}

remaider(10, 2);
remaider(15, 4);
remaider(4, 10);
