
class TextareWithLength extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.span = document.createElement("span");
        this.span.innerHTML = "0";

        this.appendChild(this.span);

        this.addEventListener("input", e => {
            this.span.innerHTML = e.target.value.length;
        });
    }
}

customElements.define("textarea-with-length", TextareWithLength);