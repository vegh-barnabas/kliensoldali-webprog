const tbody = document.querySelector("table tbody");
const thead = document.querySelector("table thead");
const trs = tbody.querySelectorAll("tr");

const textPairs = [];
trs.forEach(tr => {
    const tds = [...tr.querySelectorAll("td")];
    const tdTexts = tds.map(td => td.innerText);
    textPairs.push(tdTexts);
});

function onTHeadClick(e) {
    if(e.target.matches("th")) {
        const th = e.target;
        const idx = th.cellIndex;

        textPairs.sort((a, b) => a[idx] > b[idx] ? 1 : -1);
        console.log(textPairs);

        tbody.innerHTML = renderTBody(textPairs);
    }
}
thead.addEventListener("click", onTHeadClick);

function renderTBody(tableRows) {
    return tableRows.map(row => `
        <tr>
            ${row.map(cell => `<td> ${cell} </td>`).join('')}
        </tr>
    `).join('');
}