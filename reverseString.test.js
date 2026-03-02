import { reverseString } from "./reverseString";

test ('reverseString should reverse the characters in a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
});