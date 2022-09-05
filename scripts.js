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
let logButton = document.getElementById("logButton");
logButton.addEventListener("click", () => {
    // this is where we add the job to the array //
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
    });
});

let displayButton = document.getElementById("displayShiz");

displayButton.addEventListener("click", () => {
    fetch("http://localhost:3000/")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const gridDiv = document.getElementById("area");
            const gridOptions = {
                columnDefs: columnDefs,
                rowData: data,
            };
            new agGrid.Grid(gridDiv, gridOptions);
        });
});
// grab ol object, loop through array and create new li for each index, append li to ol, return ol.//

const columnDefs = [
    { field: "RO Number" },
    { field: "Make" },
    { field: "Model" },
    { field: "Repairs" },
    { field: "Hours" },
    { field: "isDone" },
];
