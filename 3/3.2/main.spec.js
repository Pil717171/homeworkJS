



xdescribe('2 -> 2.2 -> getName', function() {
    it('should work with null', function() {
        let isFirstCall = false;
        spyOn(window, 'prompt').and.callFake(function () {
            let result = isFirstCall ? 'vasia' : null;
            isFirstCall = true;
            return result;
                });
        result = getName();
        expect(result).toEqual(getName);
        expect(result).toEqual(getSurname);
    });
});
    
// (function() {

// 	let isFirstCall = false;
// 	let fakePosValue;
// 	let fakeNegValue;

// 	function fakeFunc() {
// 		let result = isFirstCall ? fakePosValue : fakeNegValue;
// 		isFirstCall = true;
// 		return result;
// 	}

// 	describe('task02.js -> getNameData -> test getting name (string) from user', function (){
// 		let value;
// 		let result;
// 		let testFunction = getNameData;

// 		beforeEach(function() {
// 			value = null;
// 			isFirstCall = false;
// 		});

// 		it('should work with string', function() {
// 			value = 'string';

// 			spyOn(window, 'prompt').and.returnValue(value);
// 			result = testFunction('');
// 			expect(window.prompt.calls.count()).toEqual(1);
// 			expect(result).toEqual(value);
// 		});

// 		it('should work with number', function() {
// 			fakePosValue = 'name';
// 			fakeNegValue = 10;

// 			spyOn(window, 'prompt').and.callFake(fakeFunc);
// 			result = testFunction('');

// 			expect(window.prompt.calls.count()).toEqual(2);
// 			expect(result).toEqual(jasmine.any(String));
// 		});

// 		it('should work with null', function() {
// 			fakePosValue = 'name';
// 			fakeNegValue = null;

// 			spyOn(window, 'prompt').and.callFake(fakeFunc);
// 			result = testFunction('');

// 			expect(window.prompt.calls.count()).toEqual(2);
// 			expect(result).toEqual(jasmine.any(String));
// 		});

// 		it('should work with empty string', function() {
// 			fakePosValue = 'name';
// 			fakeNegValue = '';

// 			spyOn(window, 'prompt').and.callFake(fakeFunc);
// 			result = testFunction('');

// 			expect(window.prompt.calls.count()).toEqual(2);
// 			expect(result).toEqual(jasmine.any(String));
// 		});

// 		it('should work with string contained only spaces', function() {
// 			fakePosValue = 'name';
// 			fakeNegValue = '      ';

// 			spyOn(window, 'prompt').and.callFake(fakeFunc);
// 			result = testFunction('');

// 			expect(window.prompt.calls.count()).toEqual(2);
// 			expect(result).toEqual(jasmine.any(String));
// 		});
// 	});
    

    