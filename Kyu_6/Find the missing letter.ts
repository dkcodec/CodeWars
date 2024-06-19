/*

    Find the missing letter

    Find the missing letter
    Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

    You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
    The array will always contain letters in only one case.

    Example:
        ['a','b','c','d','f'] -> 'e'
        ['O','Q','R','S'] -> 'P'

    (Use the English alphabet with 26 letters!)
*/

export function findMissingLetter(array: string[]): string {
  let i: number,
    j: number = 0,
    m: number = 122;
  i = array[0].charCodeAt(0);
  while (i <= m && j < array.length) {
    if (String.fromCharCode(i) !== array[j]) {
      return String.fromCharCode(i);
    }
    i++;
    j++;
  }
  return 'a';
}
