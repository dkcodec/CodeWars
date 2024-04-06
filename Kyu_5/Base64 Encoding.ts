/*
    Base64 Encoding

    Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.

    Example (input -> output):
        'this is a string!!' -> 'dGhpcyBpcyBhIHN0cmluZyEh'
        You can learn more about Base64 encoding and decoding here.

    Note: This kata uses the non-padding version ("=" is not added to the end).
*/

export function toBase64(str: string): string {
  // Encode this string to Base64
  return btoa(str);
}

export function fromBase64(str: string): string {
  // Decode this string from Base64
  return atob(str);
}

/*

    export function toBase64(str: string): string {
    return new Buffer(str).toString('base64');
    }

    export function fromBase64(str: string): string {
    return new Buffer(str, 'base64').toString('ascii');
    }

*/
