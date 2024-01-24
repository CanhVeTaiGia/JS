let answer = document.getElementById("button");
answer.addEventListener("click", checkAnswer);
function checkAnswer() {
    let input = document.getElementById("answer");
    let character = input.value;
    check = false;
    for(let i = 0; i < character.length; i++){
        if(i > 10){
            check = true;
        }
    }if(check){
        alert("Không hợp lệ. vui lòng nhập dưới 10 kí tự");
    }else{
        alert("Hợp lệ");
    }
}