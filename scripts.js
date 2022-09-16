let table = document.getElementById("table");
let activeJobs = [];
let completedJobs = [];
let ro_input = document.getElementById("ro_number");
let makeInput = document.getElementById("make");
let modelInput = document.getElementById("model");
let repairsInput = document.getElementById("repairs");
let hoursInput = document.getElementById("time");

class work {
    constructor(RO_Number, Make, Model, Repairs, Hours) {
        this.RO_Number = RO_Number;
        this.Make = Make;
        this.Model = Model;
        this.Repairs = Repairs;
        this.Hours = Hours;
        this.isDone = false;
    }
}
let submitJob = () => {
    let newWork = new work(
        ro_input.value,
        makeInput.value,
        modelInput.value,
        repairsInput.value,
        hoursInput.value
    );
    activeJobs.push(newWork);
    console.log(activeJobs);
    ro_input.value = "";
    makeInput.value = "";
    modelInput.value = "";
    repairsInput.value = "";
    hoursInput.value = "";

    fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify(newWork),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(setTimeout(populateTable, 2000));
};
let logButton = document.getElementById("logButton");
logButton.addEventListener("click", submitJob);
window.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        submitJob();
    }
});

// displayButton.addEventListener("click", () => {
//     fetch("http://localhost:3000/")
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             console.log(data);
//         });
// });
let populateTable = async () => {
    table.innerHTML = "";
    const response = await fetch("http://localhost:3000/");
    const readableResponse = await response.json();
    readableResponse.forEach((rowData) => {
        table.appendChild(rowMaker(rowData));
    });
};

window.addEventListener("load", populateTable);

const rowMaker = (rowData) => {
    let newRow = document.createElement("tr");
    let values = Object.entries(rowData);

    values.forEach((value) => {
        if (value[0] !== "isDone") {
            let newCell = document.createElement("td");
            newCell.innerText = value[1];
            newRow.appendChild(newCell);
        }
    });
    return newRow;
};

// const headerMaker = (headerData) => {
//     let newHeader = document.createElement("th");
//     let titles = Object.entries(headerData);
//     titles.forEach((title) => {
//         if (title[0] !== "isDone") {
//             newHeader.innerText = title[0];
//             newHeader.appendChild(title[0]);

//         }
//     });
// let clearButton = document.getElementById("clear");
// clearButton.addEventListener("click", () => {
//     fetch("http://localhost:3000/") {
//     "TRUNCATE TABLE jobs";
// }});
// grab ol object, loop through array and create new li for each index, append li to ol, return ol.//
