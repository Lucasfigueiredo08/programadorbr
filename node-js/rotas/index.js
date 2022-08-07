var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var aluno = require("./routes/aluno");


app.use(bodyParser.urlencoded( { extended: true } ));

app.use("/api", aluno)

app.get('/', function (req, res) {
    res.send("Hello World!");
})
app.listen(5000, () => {

    console.log("Servidor rodando na porta 5000");
})