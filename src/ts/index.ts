const humbergerMenu = document.getElementById(
  "humberger-menu"
) as HTMLButtonElement;
const navbarMenu = document.getElementById("navbar-menu") as HTMLUListElement;
const header = document.querySelector("#header") as HTMLDivElement;

humbergerMenu.addEventListener("click", () => {
  humbergerMenu.classList.toggle("is-open");
  navbarMenu.classList.toggle("hidden");
  navbarMenu.classList.toggle("flex");
  header.classList.toggle("bg-VeryDarkBlue");
});
