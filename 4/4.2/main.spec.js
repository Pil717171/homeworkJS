describe('./4/4.2/main.js -> vowels', () => {
	it ('return  of vowels in word', () => {
		let text = 'работа';
		expect(vowels(spyOn(window, 'prompt').and.returnValue(text))).toBe(console.log(3));
	});
});