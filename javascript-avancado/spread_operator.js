var pessoa = {
    name: "Lucas",
    idade: 32,
}

var contato = {
    telefone: 10101001,
    email: "lukas.liberato14"
}

var copia = { ...pessoa, cidade:"Rio de janeiro", ...contato}

console.log(pessoa)
console.log(copia)