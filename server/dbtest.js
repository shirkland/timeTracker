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
        console.log(JSON.stringify(result[0].Make));
    });
});
