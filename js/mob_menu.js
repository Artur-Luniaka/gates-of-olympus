const menu = document.querySelector(".header_menu_btn");
const menuBox = document.querySelector(".mob_menu_wrapper");
const mobNavLinks = document.querySelectorAll(".mob_menu_link");

menu.addEventListener("click", function () {
  if (menuBox.classList.contains("active")) {
    menuBox.classList.remove("active");
  } else {
    menuBox.classList.add("active");
  }
});

mobNavLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuBox.classList.remove("active");
  });
});
