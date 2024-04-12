/*

    Cat and Mouse - Easy Version

    You will be given a string (x) featuring a cat 'C' and a mouse 'm'. 
    The rest of the string will be made up of '.'.

    You need to find out if the cat can catch the mouse from it's current position. 
    
    The cat can jump over three characters. So:
        C.....m returns 'Escaped!' <-- more than three characters between
        C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
*/

export function catMouse(x: string): string {
  return x.length > 5 ? "Escaped!" : "Caught!";
}

// export function catMouse(x: string): string {
//   let k: number = 0;
//   let ans: string = "";
//   x.split("");
//   let c: number = x.indexOf("C");
//   for (let i = c; i < x.length; i++) {
//     if (x[i] === ".") k++;
//   }
//   k <= 3 ? (ans = "Caught!") : (ans = "Escaped!");
//   return ans;
// }
