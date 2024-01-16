
function printDuplicates(arr) {
    const countMap = {};
    for (let i = 0; i < arr.length; i++) {
      if (countMap[arr[i]]) {
        countMap[arr[i]]++;
      } else {
        countMap[arr[i]] = 1;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (countMap[arr[i]] > 1) {
        console.log(arr[i]);
      }
    }
  }
  const arr = [1, 2, 3, 4, 2, 5, 2];
  printDuplicates(arr);