// function ola() {
//     console.log("olá");
// }
// function tchau() {
//     console.log("olá");
// }
// function saudacao(s, nome) {
//     s();
//     console.log(nome)
// }


// saudacao(tchau, "Lucas")

let usuarios = ["Adriane", "Marcia", "José"]

function inserirUsuario(nome, callback){

    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000);
}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario("Lucas", listarUsuarios)

// listarUsuarios();


