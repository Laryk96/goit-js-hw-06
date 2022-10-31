const refs = {
  couner: document.querySelector("#value"),
  decrement: document.querySelector(`[data-action="decrement"]`),
  increment: document.querySelector(`[data-action="increment"]`),
};

const counterValue = {
  value: 0,

  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

refs.decrement.addEventListener("click", () => {
  counterValue.decrement();
  refs.couner.textContent = counterValue.value;
});

refs.increment.addEventListener("click", () => {
  counterValue.increment();
  refs.couner.textContent = counterValue.value;
});
