const form = document.querySelector("form");
const formDivs = form.querySelectorAll("div");

// const timePairs = [];
// formDivs.forEach(div => {
//     const inputs = Array.from(div.querySelectorAll("input"));
//     inputs.shift();

//     const inputTexts = inputs.map(e => e.value);

//     timePairs.push(inputTexts);
// });
// console.log(timePairs);

function onTimeInput(e) {
    if(e.target.matches("div input")) {
        const div = e.target.parentElement;
        const divInputs = Array.from(div.querySelectorAll("input"));
        divInputs.shift();

        if(divInputs[0].value.match("[0-2][0-9]:[0-5][0-9]") && divInputs[1].value.match("[0-2][0-9]:[0-5][0-9]")) {
            divInput1 = divInputs[0].value.replace(":", "");
            divInput2 = divInputs[1].value.replace(":", "");

            if(divInput1 > divInput2) {
                divInputs[0].classList.add("bad");
                divInputs[1].classList.add("bad");
            }
            else {
                divInputs[0].classList.remove("bad");
                divInputs[1].classList.remove("bad");
            }
        }

    }
}
document.addEventListener("input", onTimeInput);