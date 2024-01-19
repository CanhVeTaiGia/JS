console.log(fakeFind([1,2,3,4], function(e) {
    if(e % 2 === 0) {
    return true;
} else {
    return false;
}
}));
function fakeFind(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}
console.log(fakeFind([1,2,3,4], function(e) {
    if(e % 2 !== 0) {
    return true;
} else {
    return false;
}
}));