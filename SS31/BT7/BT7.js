function fakeFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(fakeFilter([1,2,3,4], function(e) {
    if(e % 2 === 0) {
    return true;
} else {
    return false;
}
}));

console.log(fakeFilter([1,2,3,4], function(e) {
    if(e % 2 !== 0) {
    return true;
} else {
    return false;
}
}));