// menu.js
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("hidden");
    menuBtn.classList.toggle("open");
  });
});
