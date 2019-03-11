
describe('./3/3.2/main.js -> Base test function getName', function() {
    it('should return a string', function () {
        var text = 'testName';
        spyOn(window, 'prompt').and.returnValue(text);
        var result = getName();
        
        afterEach(function() {
            stop()
        });
            
        expect(result).toBe(getSurname());
            
    })
});
    