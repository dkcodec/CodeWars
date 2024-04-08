/*

    ISBN-10 identifiers are ten digits long. 
    The first nine characters are digits 0-9. 
    The last digit can be 0-9 or X, to indicate a value of 10.

    An ISBN-10 number is valid if the sum of the digits multiplied by 
    their position modulo 11 equals zero.

    For example:
        ISBN     : 1 1 1 2 2 2 3 3 3  9
        position : 1 2 3 4 5 6 7 8 9 10
        This is a valid ISBN, because:
        (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
    
    Examples
        1112223339   -->  true
        111222333    -->  false
        1112223339X  -->  false
        1234554321   -->  true
        1234512345   -->  false
        048665088X   -->  true
        X123456788   -->  false

*/

const charToVal = (c: string, i: number) =>
  i === 9 && c === "X" ? 10 : Number(c);

export function validISBN10(isbn: string): boolean {
  if (isbn.length !== 10) return false;
  return (
    isbn
      .split("")
      .map(charToVal)
      .map((val, i) => val * (i + 1))
      .reduce((acc, el) => acc + el, 0) %
      11 ===
    0
  );
}

// export function validISBN10(isbn: string): boolean {
//   const arr = isbn.split("");
//   let sum = 0;
//   let index = 1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr.length < 10 || arr.length > 10) return false;
//     if (arr[i] !== "X") {
//       sum += Number(arr[i]) * index;
//       index++;
//     } else {
//       if (i !== arr.length - 1) return false;
//       sum += 10 * index;
//       index++;
//     }
//   }

//   return sum % 11 == 0;
// }
