const navbar = document.querySelector("nav");

function toggleNavbarScrolled() {
    // console.log(Date.now());

    if (window.scrollY >= 200) {
        navbar.classList.add("navbar-scrolled");
    }
    else {
        navbar.classList.remove("navbar-scrolled");
    }
}

let waiting = false;
function onScroll() {
    if (!waiting) {
        toggleNavbarScrolled();
        waiting = true;

        setTimeout(function() {
            waiting = false;
        }, 120);
    }
}

document.addEventListener("scroll", onScroll);