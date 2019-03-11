describe('./4/4.2/main.js -> vowels', () => {
	it ('return  of vowels in word', () => {
		let text = 'работа';
		spyOn(window, 'prompt').and.returnValue(text);
		expect(vowels(text)).toBe(console.log(3));
	});
});