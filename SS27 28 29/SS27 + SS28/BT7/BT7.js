function findAllSubstrings(str) {
    let result = [];
    function findSubstrings(str, start, end) {
        for (let i = start; i <= end; i++) {
            result.push(str.slice(start, i + 1));
        }
        if (end < str.length - 1) {
            findSubstrings(str, start + 1, end + 1);
        }
    }
    findSubstrings(str, 0, 0);
    return result;
}
let input = prompt("Nhập vào 1 chuỗi bất kỳ:");
let substrings = findAllSubstrings(input);
console.log(substrings);