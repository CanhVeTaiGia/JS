function findLongestWord(str) {
    let words = str.split(' ');
    let longestWords = [];
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
          maxLength = words[i].length;
          longestWords = [words[i]];
        }else if (words[i].length === maxLength) {
          longestWords.push(words[i]);
        }
    }
    let longestWord = longestWords[0];
    let length = longestWord.length;
    return `${longestWord} ${length}`;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));