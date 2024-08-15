
/*

    RGB To Hex Conversion

    The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
    Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

    Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

    Examples (input --> output):
        255, 255, 255 --> "FFFFFF"
        255, 255, 300 --> "FFFFFF"
        0, 0, 0       --> "000000"
        148, 0, 211   --> "9400D3"


*/

export function rgb(r: number, g: number, b: number): string {
    let rStr:string = r <= 255 && r >= 16 ? r.toString(16) : r < 16 && r >= 0 ? '0'+ r.toString(16) : r < 0 ? '00': 'FF'
    let gStr:string = g <= 255 && g >= 16 ? g.toString(16) : g < 16 && g >= 0 ? '0'+ g.toString(16) : g < 0 ? '00': 'FF'
    let bStr:string = b <= 255 && b >= 16 ? b.toString(16) : b < 16 && b >= 0 ? '0'+ b.toString(16) : b < 0 ? '00': 'FF'
    return `${rStr.toUpperCase()}${gStr.toUpperCase()}${bStr.toUpperCase()}`
}