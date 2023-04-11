const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 106) {
    navbar.style.backgroundColor = " rgba(20, 54, 66, 0.7)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
  console.log(navbar);
});
