describe('1.2/main.js -> profile', () => {
    
    var surname = 'Юрьевич';
    var lastname = 'Пилец';
    var age = '28';
    var old = '33';
    var day = '10220';
    var sex = true;
    var pen = false;
    
        
    it('should make anketa', () => {
        var name = 'Евгений';
        spyOn(window.profile, 'getName').and.returnValue(name);
        
        expect(name).toBe(name);
    });
});