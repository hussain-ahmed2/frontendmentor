const submitBtn = document.querySelector("#submit");
const items = document.querySelectorAll(".item");
const ratingContainer = document.querySelector(".rating-container");
const successContainer = document.querySelector(".success-container");
const output = document.getElementById("output");
let selected = null;
const dismissBtn = document.querySelector(".dismiss");
const customAlert = document.getElementById("custom-alert");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    items.forEach((el, i) => {
      if (index === i) {
        el.classList.toggle("toggle");
        if (el.classList.contains("toggle")) {
          selected = i + 1;
        } else {
          selected = null;
        }
      } else {
        el.classList.remove("toggle");
      }
    });
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (selected) {
    output.innerText = selected;
    ratingContainer.style.display = "none";
    successContainer.style.display = "grid";
  } else {
    customAlert.style.display = "flex";
    setTimeout(()=>customAlert.style.display = 'none', 3000);
  }
});

dismissBtn.addEventListener("click", () => {
  customAlert.style.display = "none";
});
