const mobileNav = document.querySelector(".mobile-nav");
const navItems = document.querySelectorAll(".mobile-nav ul li");
const menuBtn = document.getElementById("menu-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");

menuBtn.addEventListener("click", () => {
  mobileNav.style.width = "100%";
  setTimeout(() => {
    mobileNav.style.backgroundColor = "hsl(0, 0%, 0%, 0.5)";
  }, 290);
});

menuCloseBtn.addEventListener("click", () => {
  mobileNav.style.width = "0";
  mobileNav.style.backgroundColor = "";
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileNav.style.width = "0";
    mobileNav.style.backgroundColor = "";
  });
});
