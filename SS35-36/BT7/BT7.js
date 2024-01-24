function handleNumberClick(event) {
    const value = event.target.textContent;
    const display = document.querySelector(".display");
    display.textContent = display.textContent + value;
  }
  function handleOperatorClick(event) {
    const operator = event.target.textContent;
    const numbers = [document.querySelector(".display").textContent, operator];
    document.querySelector(".display").textContent = "";
  }
  function handleClearClick(event) {
    document.querySelector(".display").textContent = "";
  }
  function handleEqualClick(event) {
    const secondNumber = document.querySelector(".display").textContent;
    const result = eval(numbers[0] + numbers[1]);
    document.querySelector(".display").textContent = result;
  }
  document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", handleNumberClick);
  });
  document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", handleOperatorClick);
  });
  document.querySelector(".clear").addEventListener("click", handleClearClick);
  document.querySelector(".equal").addEventListener("click", handleEqual);