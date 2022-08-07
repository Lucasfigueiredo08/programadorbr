var express = require('express');
var router = express.Router();


let alunos = [{
    id: 0, name: "Jose"},
    {id: 1, name: "Maria"},
    {id: 2, name: "Joao"}];

router.get("/aluno", (req, res, next) => {
    console.log(req.body);
    let aluno = alunos[req.body.id];
    if(aluno) {
        res.send(aluno);
    } else {
        next();
    }
})

router.get("/aluno", (req, res, next) => {
    console.log(req.query);
    let aluno = alunos[req.query.id];
    if(aluno) {
        res.send(aluno);
    } else {
        res.send("Aluno não encontrado")
    }
})

router.get("/aluno/all", (req, res) => {
    res.json(JSON.stringify(alunos));
})

router.get("/aluno/:id", (req, res) => {
    console.log(req.params.id);
    let aluno = alunos[req.params.id];
    if(aluno) {
        res.send(aluno);
    } else {
        res.send("Aluno não encontrado")
    }
    })


// app.get("/alunos", (req, res) => {
//         res.json(JSON.stringify(alunos));
// })

// app.get("/aluno", (res,req) => {
//     console.log(req.body);
//     console.log(req.query);
//     let aluno = alunos[req.body.id];
//     res.json(aluno);
// })

module.exports = router;