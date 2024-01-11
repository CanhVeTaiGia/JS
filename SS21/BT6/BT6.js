var math = +prompt("Mời nhập điểm toán");
var literature = +prompt("Mời nhập điểm văn");
var english = +prompt("Mời nhập điểm tiếng Anh");
var grades = (math + literature + english) / 3;
if (8 <= grades && grades <= 10){
    console.log (grades + "Giỏi");
} 
else if (6.5 <= grades && grades <= 7.9){
    console.log (grades + "Khá");
}
else if (5 <= grades && grades <= 6.4){
    console.log (grades + "Trung bình");
}
else if (grades <= 5){
    console.log (grades + "Yếu");
} else{
    console.log ("Không hợp lệ");
}
