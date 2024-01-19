function chunkArrayInGroups(arr, n) {
    if (!arr.length || n < 1) {
       return [];
    }
    const chunks = [];
    for (let i = 0; i < arr.length; i += n) {
       const chunk = arr.slice(i, i + n);
       chunks.push(chunk);
    }
    return chunks;
}
console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));