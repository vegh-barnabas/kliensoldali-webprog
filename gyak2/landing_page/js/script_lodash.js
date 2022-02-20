const navbar = document.querySelector("nav");

function onScroll() {
    // console.log("Scrolled");

    navbar.classList.toggle("navbar-scrolled", window.scrollY > 200);
}
window.addEventListener("scroll", _.throttle(onScroll, 120));