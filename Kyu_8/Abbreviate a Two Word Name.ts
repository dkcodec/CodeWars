/*

    Abbreviate a Two Word Name

    Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

    The output should be two capital letters with a dot separating them.

    It should look like this:

    Sam Harris => S.H

    patrick feeney => P.F

*/

export function abbrevName(name: string): string {
  return name
    .split(" ")
    .map((e) => e[0].toUpperCase())
    .join(".");
}

// export function abbrevName(name: string): string {
//   const letter = name.split(" ")[0].split("")[0].toUpperCase();
//   const letter1 = name.split(" ")[1].split("")[0].toUpperCase();
//   return `${letter}.${letter1}`;
// }
