function capitalizeEndsOfWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0] + words[i].slice(1).toUpperCase();
    }
    return words.join(' ');
}
const input = prompt('Please enter a string:');
console.log(capitalizeEndsOfWords(input));