
/*

  Next bigger number with the same digits

  Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

    12 ==> 21
  513 ==> 531
  2017 ==> 2071
  If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

    9 ==> -1
  111 ==> -1
  531 ==> -1
*/

export function nextBigger(n: number): number {
  const digits = n.toString().split('');
  let i = digits.length - 1;
  while (i > 0 && digits[i - 1] >= digits[i]) {
    i--;
  }
  if (i === 0) return -1;
  let j = digits.length - 1;
  while (digits[j] <= digits[i - 1]) {
    j--;
  }
  [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];
  const result = digits.slice(0, i).concat(digits.slice(i).reverse()).join('');
  return parseInt(result, 10);
}
