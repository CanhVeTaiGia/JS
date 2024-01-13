// "Truthy value" là những giá trị trong Javascript mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là true
var a = 1; //kiểu int
var b = '2'; //kiểu string

console.log(a > b);
console.log(b + a);
//Kết quả: false  21;
// Falsy value là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là false.
var a = 1; //kiểu int

console.log(a == false)
//khi so sánh `a` (kiểu `int`) với `false` (kiểu `boolean`) chương trình mong muốn a được hiểu theo kiểu `boolean`, khi đó giá trị truthy hay falsy của biến sẽ được xét đến kết quả trả về là `false`.