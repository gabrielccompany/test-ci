const Math = require ('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(Math.test1(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
    expect(Math.test2(3, 2)).toBe(1);
});

test('multiplies 3 * 2 to equal 6', () => {
    expect(Math.test3(3, 2)).toBe(6);
});

test('divides 9 / 3 to equal 3', () => {
    expect(Math.test4(9, 3)).toBe(3);
});