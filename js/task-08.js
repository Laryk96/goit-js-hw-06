const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email !== "" && password !== "") {
    const user = {
      email,
      password,
    };
    console.log(user);
    event.currentTarget.reset();
  } else alert("Заполните все поля формы!");
});
