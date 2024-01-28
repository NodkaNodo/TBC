export const trackHeaderActivity = () => {
  const header = document.querySelector(".header");
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
      header.classList.add("header--with-non-initial-position");
      return;
    }
    header.classList.remove("header--with-non-initial-position");
  });
};
