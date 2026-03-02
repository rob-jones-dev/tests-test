import { calculate } from './calculator.js';

test('calculate should perform addition', () => {
    expect(calculate('add', 2, 3)).toBe(5);
});

test('calculate should perform subtraction', () => {
    expect(calculate('subtract', 5, 2)).toBe(3);
});

test('calculate should perform multiplication', () => {
    expect(calculate('multiply', 3, 4)).toBe(12);
});

test('calculate should perform division', () => {
    expect(calculate('divide', 10, 2)).toBe(5);
});