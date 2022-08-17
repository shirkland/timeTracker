let activeJobs = [];
let completedJobs = [];

class work {
    constructor(make, model, job, time) {
        this.make = make;
        this.model = model;
        this.job = job;
        this.time = time;
        this.isDone = false;
    }
}
let logButton = document.getElementById("logButton");
logButton.addEventListener("click", () => {
    // this is where we add the job to the array //
    let newWork = new work(
        makeInput.value,
        modelInput.value,
        jobInput.value,
        timeInput.value
    );
    activeJobs.push(newWork);
    console.log(activeJobs);
});
let makeInput = document.getElementById("make");
let modelInput = document.getElementById("model");
let jobInput = document.getElementById("job");
let timeInput = document.getElementById("time");
