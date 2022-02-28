
class SortableTable extends HTMLElement {
    constructor() {
        super();
        
        // console.log(this.shadowRoot);
        // this.shadowRoot.innerHTML = "Hello";

        this.attachShadow({mode: "open"});

        const table = this.querySelector("table");
        // this.shadowRoot.appendChild(table);

        this.shadowRoot.innerHTML = `<slot></slot>`;

        const style = document.createElement("style");
        style.innerHTML = `
            table tr:nth-child(even) {
                background-color: lightgray;
            }
        `;
        this.shadowRoot.appendChild(style);

        const thead = table.querySelector("thead");

        this.tbody = table.querySelector("tbody");
        this.textPairs = new Array();

        const trs = this.tbody.querySelectorAll("tr");

        trs.forEach(tr => {
            const tds = [...tr.querySelectorAll("td")];
            const tdTexts = tds.map(td => td.innerText);
            this.textPairs.push(tdTexts);
        });

        // console.log(this.textPairs);

        thead.addEventListener("click", this.onTHeadClick);
    }

    onTHeadClick = (e) => {
        if(e.target.matches("th")) {
            const th = e.target;
            const idx = th.cellIndex;

            this.textPairs.sort((a, b) => a[idx] > b[idx] ? 1 : -1);
            // console.log(this.textPairs);

            this.tbody.innerHTML = renderTBody(this.textPairs);
        }
    }
}

function renderTBody(tableRows) {
    return tableRows.map(row => `
        <tr>
            ${row.map(cell => `<td> ${cell} </td>`).join('')}
        </tr>
    `).join('');
}

customElements.define('sortable-table', SortableTable);