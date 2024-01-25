const circles = document.querySelectorAll(".circle");
const buttons = document.querySelectorAll("button");
const line = document.querySelector(".progress-bar");
let currentSteps = 1;
const updatesteps = (e) => {
currentSteps = e.target.id === "next"? ++currentSteps: --currentSteps;
circles.forEach((circles, index) => {
    circles.classList[`${index < currentSteps ? "add" : "remove"}`]("active");
});
line.style.width = `${((currentSteps - 1) / (circles.length - 1)) * 100}%`;
if(currentSteps === circles.length){
    buttons[1].disabled = true;
}else if(currentSteps === 1){
    buttons[0].disabled = true;
}else{
    buttons.forEach(button => (button.disabled = false));
}
};
buttons.forEach(button => {
    button.addEventListener("click", updatesteps);
});