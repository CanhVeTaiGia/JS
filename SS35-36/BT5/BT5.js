const input = document.getElementById("input");
const button = document.getElementById("button");
let ul = document.getElementsByClassName("list");
button.addEventListener("click" , plusListItem);
input.addEventListener("input", changeColor);
function changeColor(){
    input.style.backgroundColor = "white";
    if(input.value === ""){
        input.style.backgroundColor = "yellow";
    }
}
function plusListItem() {
    let li = document.createElement("li");
    li.textContent = input.value;
    ul[0].appendChild(li);
    input.value = "";
}
