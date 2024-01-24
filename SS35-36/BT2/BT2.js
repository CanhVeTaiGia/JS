let buttons = document.getElementById("button");
buttons.addEventListener("click", clickButton)
function clickButton(){
    if(buttons.innerText === "On"){
        button.innerText = "Off";
    }
    else{
        button.innerText = "On"
    }
}

