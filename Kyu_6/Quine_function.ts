/*

    Quine function

    Quine is a nonempty program that prints itself. 
    Your task is bit different than that. 
    Write a function that takes no parameters and returns your program as a string instead of printing it.

*/

export const quine = (): string => {
  return `export const quine = (): string ${String(exports.quine).slice(3)};`
}
