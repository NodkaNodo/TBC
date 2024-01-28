export const handleHamburgerClicks = () => {
  const overlay = document.querySelector(".overlay");
  const hamburger = document.querySelector(".menu__hamburger");
  const menu = document.querySelector(".menu__nav");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("menu__hamburger--active");
    menu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
};
