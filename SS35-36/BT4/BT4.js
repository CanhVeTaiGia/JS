let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
input1.addEventListener("input", calculateSum);
input2.addEventListener("input", calculateSum);
function calculateSum(){
    input3.value = parseInt(input1.value) + parseInt(input2.value);
}