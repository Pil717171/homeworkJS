describe('3.2 -> getName', function() {
	it('should behave function getName to return string name', function () {
		let name = 'vasia';
		spyOn(window, 'prompt').and.returnValue(name);
		expect(getName()).toBe(name);
	});
	it('should behave function getName to return null', function () {
		let name = '';
		spyOn(window, 'prompt').and.returnValue(name);
		expect(getName()).toEqual(null);
	});
});


describe('3.2 -> getSurname', function() {
	it('should behave function getSurname to return string surname', function() {
		let surname = 'ivanovich';
		spyOn(window, 'prompt').and.returnValue(surname);
		expect(getSurname()).toBe(surname);
	});
	it('should behave function getSurname to return null', function () {
		let surname = '';
		spyOn(window, 'prompt').and.returnValue(surname);
		expect(getSurname()).toEqual(null);
	});	
});
	
describe('3.2 -> getLastname', function() {
	it('should behave function getLastname to return string lastname', function() {
		let lastname = 'petrow';
		spyOn(window, 'prompt').and.returnValue(lastname);
		expect(getLastname()).toBe(lastname);
	});
	it('should behave function getLastname to return null', function () {
		let lastname = '';
		spyOn(window, 'prompt').and.returnValue(lastname);
		expect(getLastname()).toEqual(null);
	});	
});	

describe('3.2 -> getAge', function() {
	it('should behave function getAge to return age', function() {
		let age = '40';
		spyOn(window, 'prompt').and.returnValue(age);
		expect(getAge()).toBe(age);
	});
	it('should behave function getAge to return null', function () {
		let age = '';
		spyOn(window, 'prompt').and.returnValue(age);
		expect(getAge()).toEqual(null);
	});	
	it('should behave function getAge > 130 to return null', function () {
		let age = '150';
		spyOn(window, 'prompt').and.returnValue(age);
		expect(getAge()).toEqual(null);
	});	
	it('should behave function getAge < 0 to return null', function () {
		let age = '-10';
		spyOn(window, 'prompt').and.returnValue(age);
		expect(getAge()).toEqual(null);
	});	
	it('should behave function getAge no number to return null', function () {
		let age = 'ten';
		spyOn(window, 'prompt').and.returnValue(age);
		expect(getAge()).toEqual(null);
	});	
});	

describe('3.2 -> getOldDay', function() {
	it('should behave function getOldDay to return days', function() {
		expect(getOldDay('10')).toEqual({old: 15, day: 3650});
	});
});	

describe('3.2 -> getSex', function() {
	it('should behave function getSex to push ok return string men', function() {
		let conf = true;
		spyOn(window, 'confirm').and.returnValue(conf);
		expect(getSex()).toBe(sex = 'мужской');
	});
	it('should behave function getSex to push cancel return string women', function() {
		let conf = false;
		spyOn(window, 'confirm').and.returnValue(conf);
		expect(getSex()).toBe(sex = 'женский');
	});
});	

describe('3.2 -> getPenMan', function() {
	let age;
	beforeEach(function() {
		age = '80';
		getAge(spyOn(window, 'prompt').and.returnValue(age));
	});
	it('should behave function getPenMan to age > 68 ok return pen = Да', function() {
		expect(getPenMan()).toBe(pen = 'да');
	});
});	

describe('3.2 -> getPenMan', function() {
	let age;
	beforeEach(function() {
		age = '30'
		getAge(spyOn(window, 'prompt').and.returnValue(age));
	});
	it('should behave function getPenMan to age < 68 ok return pen = нет', function() {
		expect(getPenMan()).toBe(pen = 'нет');
	});
});	

describe('3.2 -> getPenWoman', function() {
	let age;
	beforeEach(function() {
		age = '64';
		getAge(spyOn(window, 'prompt').and.returnValue(age));
	});
	it('should behave function getPenMan to age > 63 ok return pen = Да', function() {
		expect(getPenWoman()).toBe(pen = 'да');
	});
});	

describe('3.2 -> getPenWoman', function() {
	let age;
	beforeEach(function() {
		age = '30';
		getAge(spyOn(window, 'prompt').and.returnValue(age));
	});
	it('should behave function getPenMan to age < 63 ok return pen = нет', function() {
		expect(getPenWoman()).toBe(pen = 'нет');
	});
});	

