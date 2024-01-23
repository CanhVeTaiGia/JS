const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function() {
  const value = input.value;
  const li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);
});