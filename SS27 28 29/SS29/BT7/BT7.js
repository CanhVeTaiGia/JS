function findPair(arr, target) {
    const numMap = new Map();
    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
      if (numMap.has(complement)) {
        return [complement, arr[i]];
      }
      numMap.set(arr[i], i);
    }
    return [];
  }
  const inputArr = prompt("Enter the array of integers separated by spaces: ").split(" ").map(x => parseInt(x));
  const target = parseInt(prompt("Enter a target number: "));
  const pair = findPair(inputArr, target);
  if (pair.length > 0) {
    console.log(`Pair found: ${pair[0]} + ${pair[1]} = ${target}`);
  } else {
    console.log(`No pair found that adds up to ${target}`);
  }