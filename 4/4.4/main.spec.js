
describe('./4/4.4/main.js -> cenz', function() {
	it('should return filtered string', function () {
		let string = 'нос, шея, нога, рука, голова, нос';
		let arr = ['голова', 'нос', 'рука'];
		let res = 'шея, нога';
		expect(cenz(string, arr)).toBe(console.log('шея, нога'));
	});
});
    