/*

    Sum of the first nth term of Series

    Your task is to write a function which returns the n-th term of the following series, 
    which is the sum of the first n terms of the sequence (n is the input parameter).

    Series: 1+1/4+1/7+1/10+1/13+1/16+...

    You will need to figure out the rule of the series to complete this.

    Rules
    -You need to round the answer to 2 decimal places and return it as String.
    -If the given value is 0 then it should return "0.00".
    -You will only be given Natural Numbers as arguments.

    Examples (Input --> Output)
        n
        1 --> 1 --> "1.00"
        2 --> 1 + 1/4 --> "1.25"
        5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

*/

export function SeriesSum(n: number): string {
  if (n === 0) {
    return "0.00";
  } else if (n === 1) {
    return "1.00";
  } else {
    let result: number = 1.0;
    let denominator: number = 4.0;
    for (let i = 2; i <= n; i++) {
      result += 1 / denominator;
      denominator += 3;
    }
    return result.toFixed(2);
  }
}
