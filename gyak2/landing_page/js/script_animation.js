const observer = new IntersectionObserver(onObserve, {
    threshold: 0.1
});

function onObserve(entries) {
    entries.forEach(entry => {
        // console.log(entry);

        if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add("animate__animated", `animate__${el.dataset.scrollAnimation}`);
        }
    });
}

// const target = document.querySelector("#services h2");
// observer.observe(target);

document.querySelectorAll("[data-scroll]").forEach(el => {
    observer.observe(el);
});