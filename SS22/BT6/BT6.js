let number = +prompt("Nhập số có 4 chữ số");
let thousand = Math.floor(number / 1000);
let hundred   = Math.floor((number - (thousand * 1000))/100);
let dozen = Math.floor((number - ((thousand * 1000) + (hundred * 100)))/10);
let unit = number % 10;
console.log(`Số ${number} có ${thousand} nghìn, ${hundred} chục, ${dozen} trăm và ${unit} đơn vị.`);