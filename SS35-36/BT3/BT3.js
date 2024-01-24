let input = document.getElementById("input");
input.addEventListener("input", inputs)
function inputs(){
    let div = document.getElementById("div");
    div.textContent = input.value;
    console.log(div.textContent);
}