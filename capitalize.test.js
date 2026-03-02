import { capitalize } from './capitalize.js';

test('capitalize should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
});