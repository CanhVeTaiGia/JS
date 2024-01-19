function fakeReduce(array, reducer, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < array.length; i++) {
       accumulator = reducer(accumulator, array[i]);
    }
    return accumulator;
}
const numbers = [1, 2, 3, 4, 5];
const sum = fakeReduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);