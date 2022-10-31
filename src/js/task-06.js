const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  const userInput = event.currentTarget.value.length;
  const validation = Number(event.currentTarget.dataset.length);

  if (validation !== userInput) inputEl.classList.add("invalid");
  else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
});
