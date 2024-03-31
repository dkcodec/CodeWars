/*

    Roman Numerals Decoder

    Create a function that takes a Roman numeral as its argument 
    and returns its value as a numeric decimal integer. 
    You don't need to validate the form of the Roman numeral.
    Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
    starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) 
    and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", 
    uses each letter in descending order.

    Example:
        "MM"      -> 2000
        "MDCLXVI" -> 1666
        "M"       -> 1000
        "CD"      ->  400
        "XC"      ->   90
        "XL"      ->   40
        "I"       ->    1
        
    Help:
        Symbol    Value
        I          1
        V          5
        X          10
        L          50
        C          100
        D          500
        M          1,000

*/

export function solution(roman: string): number {
  const symbols: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return roman
    .split("")
    .map((e) => symbols[e])
    .reduce((p, c) => (p < c ? c - p : c + p));
}

/*
    The Same solution but little bit harder

export function solution(roman: string): number {
  const mp: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let n: number = roman.length;
  let ans: number = mp[roman[n - 1]];
  for (let i = n - 2; i >= 0; i--) {
    if (mp[roman[i]] < mp[roman[i + 1]]) {
      let l: number = mp[roman[i + 1]] - mp[roman[i]];
      ans = ans - mp[roman[i + 1]];
      ans = ans + l;
    } else {
      ans = ans + mp[roman[i]];
    }
  }
  return ans;
}
*/
