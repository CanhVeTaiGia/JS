let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 3, 4, 5, 6];
let arr3 = [3, 5, 7, 11, 13];
let commonElements = arr1.filter(function(value) {
 return arr2.includes(value) && arr3.includes(value);
});
console.log("Các phần tử chung của cả 3 mảng:");
commonElements.forEach(function(value) {
 console.log(value);
});