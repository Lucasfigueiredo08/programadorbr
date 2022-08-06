const express = require('express');
var app = express();
var bodyParser = require('body-parser');

let consoleBody = (req, res, next) => {
        console.log(req.body);
        next();
}

let hello = (req, res) => {

        res.send("<h1>Hello World</h1>");
}

app.use("/", bodyParser.json());
app.use("/", consoleBody);
app.get("/", hello)

app.post("/", hello)

app.listen(3000, () => console.log('Example app listening on port 3000!'));