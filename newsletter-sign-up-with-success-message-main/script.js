const submitBtn = document.getElementById("submit");
const dismissBtn = document.getElementById("dismiss");
const input = document.getElementById("email");
const signupContainer = document.querySelector(".signup-container");
const successContainer = document.querySelector(".success-container");
const error = document.getElementById("error");


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;
  const value = input.value;

  if (regex.test(value)) {
    error.style.visibility = "hidden";
    input.style.backgroundColor = 'white';
    input.style.borderColor = 'hsl(231, 7%, 60%, .5)';
    input.style.color = 'hsl(235, 18%, 26%)';

    signupContainer.style.display = "none";
    successContainer.style.display = "grid";

    document.getElementById('inputMail').innerText = input.value;
  } else {
    error.style.visibility = "visible";
    input.style.backgroundColor = 'hsl(4, 100%, 67%, .2)';
    input.style.borderColor = 'hsl(4, 100%, 67%)';
    input.classList.toggle('pct');
    input.style.color = 'hsl(4, 100%, 67%)';
  }
});

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();
  successContainer.style.display = "none";
  signupContainer.style.display = "grid";
  input.value = '';
input.classList.toggle('pct');
});
