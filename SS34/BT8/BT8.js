const buttons = document.querySelectorAll(".delete");
for (const button of buttons) {
  button.addEventListener("click", function() {
    this.parentNode.remove();
  });
}
function deleteRow(event) {
    const row = event.target.parentElement;
    row.remove();
  }
  const deleteButtons = document.querySelectorAll("button[type='button']");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteRow);
  });