import { caesarCipher } from "./caesarCipher";

test('caesarCipher should shift letters in a string by a given number', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
    expect(caesarCipher('world', 5)).toBe('btwqi');
});

test('caesarCipher should wrap around the alphabet', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('abc', -3)).toBe('xyz');
});