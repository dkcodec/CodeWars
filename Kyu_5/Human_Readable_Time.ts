/*

    Human Readable Time

    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    
    The maximum time never exceeds 359999 (99:59:59)

*/

export function humanReadable(seconds: number): string {
  if (seconds >= 359999) return "99:59:59";

  let hours: number = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minutes: number = Math.floor(seconds / 60);
  seconds %= 60;

  let hh_mm_ss: string = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  return hh_mm_ss;
}
