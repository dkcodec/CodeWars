/* 

    Simple Pig Latin

    Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
    Leave punctuation marks untouched.

    Examples
        pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
        pigIt('Hello world !');     // elloHay orldway !
*/

export const pigIt = (str: string): string => {
  return str
    .split(" ")
    .map((word) => {
      if (/^[a-zA-Z]+$/.test(word)) {
        return word.substring(1) + word[0] + "ay";
      }
      return word;
    })
    .join(" ");
};
