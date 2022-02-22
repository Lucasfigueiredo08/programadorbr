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

// function inserirUsuario(nome, callback){

//     setTimeout(() => {
//         usuarios.push(nome);
//         callback();
//     }, 1000);
// }

// function listarUsuarios() {
//     console.log(usuarios);
// }

// promise
function inserirUsuario(nome){
    let promise = new Promise(function (resolve, reject){
        setTimeout(() => {
            usuarios.push(nome)
           let error = false;
           
            if(!error){
                resolve();
            } else {
                reject({msg: "Erro de qualquer coisa"})
            }
        }, 1000);
    })
    return promise;
}

function listaUsuarios() {
    console.log(usuarios)
}

// inserirUsuario("Lucas", listarUsuarios)
// listarUsuarios();

// inserirUsuario("Lucas").then(listaUsuarios).catch((error) => {
//     console.log(error)
// });

/*ASYNC AWAIT*/

async function executar(){
    
    await inserirUsuario("Igor");
    listaUsuarios();
}
executar();


