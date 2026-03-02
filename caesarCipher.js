export function caesarCipher(str, shift) {
  if (typeof str !== 'string' || typeof shift !== 'number') {
    return '';
  };

  if (shift < 0) {
    shift = (shift % 26) + 26;
  } 

  return str.split('').map(char => {
    let charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode((charCode - 65 + shift) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode((charCode - 97 + shift) % 26 + 97);
    } else {
        return char;
    }
  }).join('');
}