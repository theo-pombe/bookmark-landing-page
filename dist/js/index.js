"use strict";
const humbergerMenu = document.getElementById("humberger-menu");
const navbarMenu = document.getElementById("navbar-menu");
const header = document.querySelector("#header");
humbergerMenu.addEventListener("click", () => {
    humbergerMenu.classList.toggle("is-open");
    navbarMenu.classList.toggle("hidden");
    navbarMenu.classList.toggle("flex");
    header.classList.toggle("bg-VeryDarkBlue");
});
//# sourceMappingURL=index.js.map