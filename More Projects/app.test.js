const add = require(`./app`);

test('returns the sum of all the numbers', () => {
    expect(add(1, 2, 3, 4)).toBe(10);
})

test('returns the sum of all the numbers', () => {
    expect(add(1, 2, 3)).toBe(10);
})