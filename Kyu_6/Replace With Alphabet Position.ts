/*

    Replace With Alphabet Position

    Welcome.

    In this kata you are required to, given a string, replace every letter with its position in the alphabet.

    If anything in the text isn't a letter, ignore it and don't return it.

    "a" = 1, "b" = 2, etc.

    Example
        Input = "The sunset sets at twelve o' clock."
        Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

*/

export function alphabetPosition(text:string):string {
    return text.split(' ').map(e => e.split('').map(el => el.match(/[a-z]/i) ? el.toUpperCase().charCodeAt(0)-64 : '').filter(el => el !== '').join(' ')).filter(el => el !== '').join(' ').trim()
}