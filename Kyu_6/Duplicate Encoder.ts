/*

    Duplicate Encoder

    The goal of this exercise is to convert a string to a new string 
    where each character in the new string is "(" if that character appears only once 
    in the original string, or ")" if that character appears more than once in the original string. 
    Ignore capitalization when determining if a character is a duplicate.

    Examples
        "din"      =>  "((("
        "recede"   =>  "()()()"
        "Success"  =>  ")())())"
        "(( @"     =>  "))((" 
        Notes
        Assertion messages may be unclear about wha
*/

export function duplicateEncode(word: string) {
  let counter: any = {};
  word
    .toLowerCase()
    .split("")
    .forEach((e) => (counter[e] = (counter[e] || 0) + 1));
  return word
    .toLowerCase()
    .split("")
    .map((e) => (counter[e] === 1 ? "(" : ")"))
    .join("");
}
