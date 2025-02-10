const result = document.getElementById("result");
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
  let value = button.textContent;
    if (button.classList.contains("clear")) {
      result.value = "";
    } else if (button.classList.contains("delete")) {
      result.value = result.value.slice(0, -1);
    } else if (button.classList.contains("equals")) {
      try {
        result.value = eval(result.value) || "";
      } catch (e) {
        result.value = "Error";
      }
    } else {
      result.value+=value;
    }
  });
});
