var aluno = {
    matricula: 123,
    nome: "Lucas",
    telefone: 96991264264,
    cidde: "Barra da praia"
}

var aluno1 = {
    matricula: 123,
    nome: "Lucas",
    telefone: 96991264264,
    cidde: "Barra da praia"
}

var aluno2 = {
    matricula: 123,
    nome: "Lucas",
    telefone: 96991264264,
    cidde: "Barra da praia"
}

var { nome, ...copia } = aluno;
copia.matricula = 1010;
console.log(copia);
console.log(aluno);
console.log(nome);

const { matricula, nome, ...resto} = aluno;
console.log(resto);

var alunos = [aluno, aluno1]

var[ joao,  marcos] = alunos
console.log(marcos);

var alunos = [aluno, aluno1, aluno2]

var [marcos, ...outros] = alunos
console.log(marcos)
console.log(outros)