describe('./4./4.1/main.js -> remaider', () => {
	it('if a > b function remaider should return result', () => {
		var a = 10;
		var b = 2;
		var result = a / b;
		expect(remaider(10,2)).toBe(console.log('Делится. Результат деления' + ' ' + result));
	});
	it ('if a < b function remaider should return result don`t remaider', () => {
		a = 5;
		b = 10; 
		expect(remaider(10,2)).toBe(console.log('Не делится'));
	});
	it ('if a > b function remaider should return result with remaider', () => {
		a = 13;
		b = 10; 
		var remaid = a % b;
		expect(remaider(10,2)).toBe(console.log('Делится с остатком. Остаток от деления' + ' ' + remaid));
	});
});

