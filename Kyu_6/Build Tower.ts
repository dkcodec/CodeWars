/*

    Build Tower

    Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
    A tower block is represented with "*" character.

    For example, a tower with 3 floors looks like this:

        [
        "  *  ",
        " *** ", 
        "*****"
        ]

        And a tower with 6 floors looks like this:
        [
        "     *     ", 
        "    ***    ", 
        "   *****   ", 
        "  *******  ", 
        " ********* ", 
        "***********"
        ]

*/

export const towerBuilder = (nFloors: number): string[] => {
    if (nFloors === 1)
        return ['*']
    let arr : string[] = []
    let pyramid = "";
    for(let i = 1; i <= nFloors; i++){
        let spaces = " ".repeat(nFloors - i);
        let stars = "*".repeat(2 * i - 1);
        arr.push(spaces + stars + spaces);
    }
    return arr
}