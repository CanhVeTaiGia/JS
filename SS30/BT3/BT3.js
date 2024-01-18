function sortCharsByType(str) {
    let charTypes = {
        letter: [],
        number: [],
        symbol: []
    }
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            charTypes.number.push(str[i]);
        }else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            charTypes.letter.unshift(str[i]);
        }else {
            charTypes.symbol.push(str[i]);
        }    
    }  
    return charTypes.letter.concat(charTypes.number, charTypes.symbol);
}
let input = prompt("Enter a string:");
let sortedChars = sortCharsByType(input);
console.log(sortedChars);