
describe('./4/4.5/main.js -> price', function() {
	it('should return sum prices', () => {
		let test = [
			{
				name: 'БМВ',
				id: 1,
				unit: 'шт.',
				quantity: 4,
				price: 100, 
			},
			{
				name: 'макароны',
				id: 2,
				unit: 'упаковки',
				quantity: 3,
				price: 10, 
			},
			{
				name: 'яйца',
				id: 3,
				unit: 'десяток',
				quantity: 7,
				price: 1, 
			}
		];
		expect(price(test)).toBe(console.log(437));
	});
});
    