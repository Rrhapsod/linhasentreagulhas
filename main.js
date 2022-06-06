const navigation = document.getElementById('navigation')

document.body.addEventListener("touchmove", onScroll);
window.addEventListener("scroll", onScroll);

function onScroll() {
  showNavOnScroll();
  showBackToTopButton();
}

function showNavOnScroll() {
  if (scrollY == 0) {
    navigation.classList.remove("scroll");
  } else {
    navigation.classList.add("scroll");
  }
}

function showBackToTopButton() {
  if (scrollY > 800) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(
  "#home, #home img, #home .stats, #produtos, #produtos header, #produtos .card, #about, #about header, #about .content, #contact, #contact header, #contact .content"
);
