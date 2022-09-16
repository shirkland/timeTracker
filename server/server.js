const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const port = 3000;
const jsonParser = bodyParser.json();
let mysql2 = require("mysql2");

app.get("/", (req, res) => {
    let connector = mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "Wordpass666!",
        database: "work",
    });

    connector.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        connector.query("SELECT * FROM jobs;", function (err, result) {
            if (err) throw err;
            // console.log("Result: " + result);
            res.send(JSON.stringify(result));
        });
    });
});

app.post("/", jsonParser, (req, res) => {
    let newData = req.body;
    let newArr = [
        newData.RO_Number,
        newData.Make,
        newData.Model,
        newData.Repairs,
        newData.Hours,
        newData.isDone,
    ];

    let connector = mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "Wordpass666!",
        database: "work",
    });

    connector.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        connector.query(
            "INSERT INTO jobs(RO_Number, Make, Model, Repairs, Hours, isDone) VALUES (?,?,?,?,?,?)",
            newArr,
            function (err, result) {
                if (err) throw err;
                // console.log("Result: " + result);
                // console.log(JSON.stringify(result[0].Make));
            }
        );
    });
    res.send("anything");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
