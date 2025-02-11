const header = document.querySelector("header");
const webMarkUp = `<a href="#"
            ><img
              class="header_logo"
              src="./images/logo.webp"
              alt="Gates of Olympus"
          /></a>
          <nav class="web_menu_nav">
            <ul class="web_menu_list">
              <li class="web_menu_item">
                <a class="web_menu_link" href="#about">About Game</a>
              </li>
              <li class="web_menu_item">
                <a class="web_menu_link" href="#bonuses">Bonuses</a>
              </li>
              <li class="web_menu_item">
                <a class="web_menu_link" href="#strategy">Strategy</a>
              </li>
              <li class="web_menu_item">
                <a class="web_menu_link" href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>`;

const mobMarkUp = `<a href="#"
            ><img
              class="header_logo"
              src="./images/logo.webp"
              alt="Gates of Olympus"
          /></a>
          <button class="header_menu_btn">
            <svg class="header_menu_icon" width="24" height="24">
              <use href="./images/icons.svg#icon-menu"></use>
            </svg>
          </button>`;

const markUpByScreenSize = () => {
  if (window.innerWidth >= 1280) {
    header.innerHTML = "";
    header.insertAdjacentHTML("beforeend", webMarkUp);
  } else {
    header.innerHTML = "";
    header.insertAdjacentHTML("beforeend", mobMarkUp);
  }
};
markUpByScreenSize();
window.addEventListener("resize", markUpByScreenSize);
