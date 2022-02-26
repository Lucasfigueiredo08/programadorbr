
function novoAluno(nome, idade){
    return { nome, idade}
}

let alunos = [
    novoAluno("Maria", 23),
    novoAluno("José", 45),
    novoAluno("Antonio", 35),
    novoAluno("Joao", 33)
]

function idadeTurma(nomezao, aluno) {
    return nomezao + aluno.nome;
}

console.log(alunos.reduce(idadeTurma, "teste"));