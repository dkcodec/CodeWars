export const mix = (s1: string, s2: string): string => {
  const str1 = new Map<string, number>();
  const lowerStr = s1.replace(/[^a-z]/g, "");
  for (const el of lowerStr) {
    if (/[a-z]/.test(el)) str1.set(el, (str1.get(el) || 0) + 1);
  }

  const str2 = new Map<string, number>();
  const lowerStr1 = s2.replace(/[^a-z]/g, "");
  for (const el of lowerStr1) {
    if (/[a-z]/.test(el)) str2.set(el, (str2.get(el) || 0) + 1);
  }

  const result: string[] = [];

  for (const [char, freq1] of str1.entries()) {
    const freq2 = str2.get(char) || 0;
    if (freq1 > 1 || freq2 > 1) {
      // Exclude characters with frequency <= 1
      const maxFreq = Math.max(freq1, freq2);
      const prefix = freq1 > freq2 ? "1" : freq1 < freq2 ? "2" : "=";
      result.push(`${prefix}:${char.repeat(maxFreq)}`);
    }
  }

  for (const [char, freq2] of str2.entries()) {
    const freq1 = str1.get(char) || 0;
    if (!str1.has(char) && freq2 > 1) {
      // Exclude characters with frequency <= 1
      result.push(`2:${char.repeat(freq2)}`);
    }
  }

  return result.join("/");
};

console.log(mix("looping is fun but dangerous", "less dangerous than coding"));
