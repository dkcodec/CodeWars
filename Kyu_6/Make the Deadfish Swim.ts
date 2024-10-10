/*

    Make the Deadfish Swim

    Write a simple parser that will parse and run Deadfish.

    Deadfish has 4 commands, each 1 character long:

        i increments the value (initially 0)
        d decrements the value
        s squares the value
        o outputs the value into the return array
        Invalid characters should be ignored.

        parse("iiisdoso") => [8, 64]
*/

export function parse(data: string): number[] {
  let val: number = 0
  const arr: number[] = []
  data.split('').map((el) => {
    el === 'i'
      ? (val += 1)
      : el === 's'
      ? (val *= val)
      : el === 'd'
      ? (val -= 1)
      : el === 'o'
      ? arr.push(val)
      : null
  })
  return arr
}
