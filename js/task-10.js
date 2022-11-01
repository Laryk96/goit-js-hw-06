function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Функции
function createBoxes(amount) {
  const elements = [];
  let pixel = 30;

  for (let i = 0; i < amount; i += 1) {
    const creatEl = document.createElement("div");

    creatEl.style.backgroundColor = getRandomHexColor();
    creatEl.style.width = `${pixel}px`;
    creatEl.style.height = `${pixel}px`;
    pixel += 10;

    elements.push(creatEl);
  }

  boxesEl.append(...elements);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  controlsEl.firstElementChild.value = 0;
}

// Инициализация
const controlsEl = document.querySelector("#controls");
const creatBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

// Слушатели событий
creatBtn.addEventListener("click", (event) => {
  const inputValue = controlsEl.firstElementChild.value;

  createBoxes(inputValue);
});

destroyBtn.addEventListener("click", destroyBoxes);
