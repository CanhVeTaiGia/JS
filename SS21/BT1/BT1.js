
var age = +prompt("Bạn sinh năm bao nhiêu");
if(Number.isSafeInteger(age)){
    console.log("Tuổi của bạn là " + age);
}else{
    console.log("Không hợp lệ");
}