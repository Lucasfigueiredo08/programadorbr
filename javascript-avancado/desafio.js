// reduce
function nomeIdade(nome, idade){
    return {nome, idade};
}


let alunos = [
    nomeIdade("Lucas", 25),
    nomeIdade("Amanda",22)
]

let somaIdade = 0;

function soma(alunos){
    for (let aluno of alunos) {
          somaIdade += aluno.idade;
    }
    return somaIdade;
}

let juntaNome = ""

function concatenaNome() {
    for(let nome of alunos){
        juntaNome += nome.nome;
    }
    return juntaNome;
}


console.log(soma(alunos))
console.log(concatenaNome())

// Map

function map(){
    for(let aluno of alunos){
        // return aluno.nome + " tem " + aluno.idade;
        console.log(aluno.nome + " tem " + aluno.idade);
    }
}

console.log(map())

