const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const port = 3000;
const jsonParser = bodyParser.json();

app.get("/", (req, res) => {
    res.send({ data: "dickballs" });
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
