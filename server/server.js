const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const port = 3000;
const jsonParser = bodyParser.json();

app.get("/poop", (req, res) => {
    let mysql2 = require("mysql2");

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
    // if (req.body.data === 5) {
    //     res.status(200);
    // } else {
    //     res.status(400);
    // }
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
