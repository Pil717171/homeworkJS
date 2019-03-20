describe('./7.1 -> sequence', () => {
    let start = 5;
    let step = 2;
    let generator = sequence(start, step);
    it ('should return first start', () => {
        expect(generator()).toBe(5);
    });   
});

describe('./7.1 -> sequence second', () => {
    let start = 5;
    let step = 2;
    let generator = sequence(start, step);
    beforeEach(function() {
        generator();
    });
    it ('should return second start + step', () => {
        expect(generator()).toBe(7);
    });
});

describe('./7.1 -> sequence first start null', () => {
    let start = null;
    let step = 2;
    let generator = sequence(start, step);
    it('if start null return first 0', function() {
        expect(generator()).toBe(0);
    });
});

describe('./7.1 -> sequence second start null', () => {
    let start = null;
    let step = 2;
    let generator = sequence(start, step);
    beforeEach(function() {
        generator();
    });
    it('if start null return second null', function() {
        expect(generator()).toBe(2);
    });
});

describe('./7.1 -> sequence step null', () => {
    let start = 15;
    let step = null;
    let generator = sequence(start, step);
    it('if start null return step = 1', function() {
        expect(generator()).toBe(15);
    });
});

describe('./7.1 -> sequence second step null', () => {
    let start = 15;
    let step = null;
    let generator = sequence(start, step);
    beforeEach(function() {
        generator();
    });
    it('if start null return second null', function() {
        expect(generator()).toBe(16);
    });
});