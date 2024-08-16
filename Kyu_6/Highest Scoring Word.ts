/*

    Highest Scoring Word

    Given a string of words, you need to find the highest scoring word.

    Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

    For example, the score of abad is 8 (1 + 2 + 1 + 4).

    You need to return the highest scoring word as a string.

    If two words score the same, return the word that appears earliest in the original string.

    All letters will be lowercase and all inputs will be valid.

*/

export const high = (str: string): string => {
    const arr: number[] = str.split(' ').map(word => 
      word.split('').reduce((sum, char) => sum + (char.toUpperCase().charCodeAt(0) - 64), 0)
    )
    const maxIndex = arr.reduce((maxIdx, currentVal, currentIndex, array) => 
      currentVal > array[maxIdx] ? currentIndex : maxIdx, 0
    );
  
    return str.split(' ')[maxIndex]
}