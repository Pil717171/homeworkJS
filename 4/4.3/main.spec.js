xdescribe('./4/4.3/main.js -> ', () => {
	it('should return true', () => {
		let password = 'qwerty';
		let email = 'ddd@gmail.com';
		let name = 'hhh';
		let lastName = 'hhh';
		let result = f (password, email, name, lastName);
		expect(result).toBeUndefined();        
     
	});
});