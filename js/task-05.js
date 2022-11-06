const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const userName = inputEl.value.trim();
  console.log(userName);
  console.log(inputEl.value);
  outputEl.textContent = userName !== "" ? userName : "Anonymous";
});
