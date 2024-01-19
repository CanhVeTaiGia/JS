function maxSubArraySum(arr, n) {
   let windowSum = 0;
   let maxSum = 0;
   for (let i = 0; i < n; i++) {
      windowSum += arr[i];
   }
   maxSum = windowSum;
   for (let i = n; i < arr.length; i++) {
      windowSum = windowSum - arr[i - n] + arr[i];
      maxSum = Math.max(maxSum, windowSum);
   }
   return maxSum;
   }
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));