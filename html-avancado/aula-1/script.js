
// let image = document.getElementById("like");

// image.addEventListener("click", function() {

    // image.src = './imagens/thumbs-down.png'
    // let lastImage = image.getAttribute("src");
    // image.setAttribute("src", "./imagens/thumbs-down.png")

    // console.log(lastImage);

    // image.setAttribute("cor", "vermelho");
// })

let lista = document.getElementById("lista");

lista.dataset.n = 6

let id = parseInt(lista.getAttribute("data-id"));
console.log(id);

let num = parseInt(lista.getAttribute("data-n"));

console.log(lista.dataset.n)

let conteudo = ""

for (let i = 0; i < num; i++){
    conteudo += "<li>" + i + "</li>"



}
lista.innerHTML = conteudo;
