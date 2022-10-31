const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeEl.addEventListener("change", (event) => {
  const currentSize = `${event.currentTarget.value}px`;

  textEl.style.fontSize = currentSize;
});
