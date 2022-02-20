const div = document.createElement("div");


div.innerHTML = `
    <div style="position: fixed; z-index: 2000; width: 100%">
        <div style="height: 5px; width: 100%; background-color: lightblue;"></div>
    </div>
`;

document.body.prepend(div);

const progressBar = div.querySelector("div div");

function onScroll() {
    // console.log("calculate progresbar");
    progressBar.style.width =
        `${Math.floor(document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100)}%`;

    // console.log(`${Math.floor(document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100)}%`);
}
window.addEventListener("scroll", _.throttle(onScroll, 100));

