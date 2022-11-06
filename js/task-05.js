const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const userName = inputEl.value.trim();

  outputEl.textContent = userName !== "" ? userName : "Anonymous";
});
