// Declare an array of strings
const arr = ['apple', 'banana', 'orange', 'strawberry', 'grape', 'blueberry'];
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (input) => {
  const result = arr.filter(str => str.includes(input));
  console.log(`The following strings contain the substring "${input}":`);
  console.log(result);
  rl.close();
});