
class SortableTable extends HTMLTableElement {
    constructor() {
        super();
        
        console.log(this);

        const thead = this.querySelector("thead");

        this.tbody = this.querySelector("tbody");
        this.textPairs = new Array();

        const trs = this.tbody.querySelectorAll("tr");

        trs.forEach(tr => {
            const tds = [...tr.querySelectorAll("td")];
            const tdTexts = tds.map(td => td.innerText);
            this.textPairs.push(tdTexts);
        });

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

customElements.define('sortable-table', SortableTable, {extends: 'table'});