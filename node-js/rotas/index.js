var express = require('express');
var app = express();
var bodyParser = require('body-parser');

let alunos = [{
    id: 0, name: "Jose"},
    {id: 1, name: "Maria"},
    {id: 2, name: "Joao"}];

app.use(bodyParser.urlencoded( { extended: true } ));

app.get('/', function (req, res) {
    res.send("Hello World!");
})

app.get("/alunos", (req, res) => {
        res.json(JSON.stringify(alunos));
})

// app.get("/aluno", (res,req) => {
//     console.log(req.body);
//     console.log(req.query);
//     let aluno = alunos[req.body.id];
//     res.json(aluno);
// })

app.get("/aluno/:id", (req, res) => {
    console.log(req.params.id);
    let aluno = alunos[req.params.id];
    res.json(aluno);
})

app.listen(5000, () => {

    console.log("Servidor rodando na porta 5000");
})