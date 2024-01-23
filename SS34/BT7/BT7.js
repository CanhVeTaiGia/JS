const table = document.querySelector("table");
const newRow = document.createElement("tr");
newRow.innerHTML = `
  <td>Cell 1 row 2</td>
  <td>Cell 2 row 2</td>
  <td>Cell 3 row 2</td>
`;
const button = document.getElementById("add-row");
button.addEventListener("click", function() {
  table.appendChild(newRow);
});