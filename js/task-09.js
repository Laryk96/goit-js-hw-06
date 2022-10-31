function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const indicatorEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  const bodyEl = document.body.style;

  bodyEl.backgroundColor = getRandomHexColor();
  indicatorEl.textContent = bodyEl.backgroundColor;
});
