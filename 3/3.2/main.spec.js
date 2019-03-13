



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
