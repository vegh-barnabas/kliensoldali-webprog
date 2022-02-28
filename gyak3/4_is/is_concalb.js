
class SortableTable extends HTMLTableElement {
    constructor() {
        console.log("constructor");
        super();
    }
        
    connectedCallback() {
        console.log("appended to dom");

        console.log(this);

        this.thead = this.querySelector("thead");

        this.tbody = this.querySelector("tbody");
        this.textPairs = new Array();

        const trs = this.tbody.querySelectorAll("tr");

        trs.forEach(tr => {
            const tds = [...tr.querySelectorAll("td")];
            const tdTexts = tds.map(td => td.innerText);
            this.textPairs.push(tdTexts);
        });

        this.thead.addEventListener("click", this.onTHeadClick);
    }

    disconnectedCallback() {
        console.log("disconnected");
        this.thead.removeEventListener("click", this.onTHeadClick);
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

// only constructor
const st = document.createElement("table", {is: "sortable-table"});

st.innerHTML = `<table is="sortable-table">
<thead>
    <tr>
        <th>Gyümölcs</th>
        <th>Megye</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Körte</td>
        <td>Békés</td>
    </tr>
    <tr>
        <td>Cseresznye</td>
        <td>Hajdú-Dorog</td>
    </tr>
    <tr>
        <td>Barack</td>
        <td>Vas</td>
    </tr>
</tbody>
</table>`;

// append
document.body.appendChild(st);
