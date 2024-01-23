function changeText() {
    var textElement = document.getElementById("textElement");
    if (textElement.innerHTML === "Original Text") {
      textElement.innerHTML = "Changed Text";
    } else {
      textElement.innerHTML = "Original Text";
    }
  }