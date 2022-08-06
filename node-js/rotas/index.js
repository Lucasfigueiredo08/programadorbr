var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send("Hello World!");
})

app.get("/alunos", (res, req) => {

    let alunos = [{
        id: 0, name: "Jose"},
        {id: 1, name: "Maria"},
        {id: 2, name: "Joao"}];

        res.json(JSON.stringify(alunos));
})

app.get("/aluno/:id", (res,req) => {

    console.log(req.body);
    consolge.log(req.query);
    // /alunos/2
    // let aluno = [req.params.id]

    // /aluno?id=1
    let aluno = aluno[req.query.id];

    // /aluno
    // let aluno = aluno[req.body.id];
    res.json(aluno);
})

app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000");
})