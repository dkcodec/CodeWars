/*

    Simple Fun #27: Rectangle Rotation

    A rectangle with sides equal to even integers a and b 
    is drawn on the Cartesian plane. 
    Its center (the intersection point of its diagonals) 
    coincides with the point (0, 0), but the sides of the rectangle 
    are not parallel to the axes; instead, they are forming 45 
    degree angles with the axes.

    How many points with integer coordinates are located 
    inside the given rectangle (including on its sides)?

    Example
        For a = 6 and b = 4, the output should be 23

*/

export function rectangleRotation(a: number, b: number): number {
  let fd = a / Math.sqrt(2) / 2;
  let sd = b / Math.sqrt(2) / 2;
  let rectExt = [2 * Math.floor(fd) + 1, 2 * Math.floor(sd) + 1];
  let rectInt = [
    2 * Math.floor(fd) + (fd % 1 < 0.5 ? 0 : 2),
    2 * Math.floor(sd) + (sd % 1 < 0.5 ? 0 : 2),
  ];
  return rectExt[0] * rectExt[1] + rectInt[0] * rectInt[1];
}
