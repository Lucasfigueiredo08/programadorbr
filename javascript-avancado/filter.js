function novoAluno(nome, idade){
    return { nome, idade}
}

// for(let aluno of alunos){
//     if (aluno.idade < 30){
//         console.log(alunos.nome)
//     }
// }

let alunos = [
    novoAluno("Maria", 23),
    novoAluno("Maria", 33),
    novoAluno("Maria", 43),
    novoAluno("Maria", 253),
]

let jogadores = [
    novoAluno("Maria", 23),
    novoAluno("Maria", 43),
    novoAluno("Maria", 33),
    novoAluno("Maria", 53),
]

function temMenosde30(aluno){
    return aluno.idade < 30
}
function temMaisde30(aluno){
    return aluno.idade > 30
}

// let alunoscomMaisde30 = alunos.filter(temMenosde30)

// console.log(alunoscomMaisde30)

/*
function filtro(callback){

    let alunosFiltrados =[];

    for (let aluno of alunos){
        if (callback(aluno)) {
            alunosFiltrados.push(aluno)
        }
    }

          return alunosFiltrados;
}

console.log(filtro(temMaisde30))

*/

// function nomeIdade(aluno) {
//     // return aluno.nome + " tem " + aluno.idade + " anos";
//     return {
//         nome: aluno.nome,
//         idade: aluno.idade
//     }
// }

// console.log(alunos.map(nomeIdade))


// valor e referencia
    // let alunoA = {nome: "Igor", idade: 15}

    // let alunoB = {...alunoA}
    // let alunoB = Object.assign({}, alunoA)

    // alunoB.idade = 25;


