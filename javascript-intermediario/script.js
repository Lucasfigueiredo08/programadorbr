// WINDOW
// window.alert("teste2");
// alert("teste");

//DOCUMENT
// window.document;
// console.log(document);

//DOM
// document.body.innerHTML = "<h1>Esse titulo foi inserido usando js" + document.body.innerHTML;

//ACESSANDO ELEMENTOS NO HTML
// let p1 = document.getElementById("p1");
// console.log(p1);
// let pClass = document.getElementsByClassName("paragrafo");
// console.log(pClass);
// let tags = document.getElementsByTagName("p");
// console.log(tags);

//MODIFICANDO ELEMENTOS
// document.body.innerHTML

let p1 = document.getElementById("p1");
p1.innerHTML = "Novo conteudo"
p1.innerText = "Conteudo mais novo";
p1.textContent = "Conteudo mais novo ainda";

p1.innerHTML = "<h1>Novo conteudo</h1>"
p1.innerText = "<h2>Conteudo mais novo</h2>";
p1.textContent = "<h3>Conteudo mais novo ainda</h3>";

p1.className = "";
p1.style = "color: blue"

p1.getAttribute("meuAtt");
p1.setAttribute("meuAtt", "Lucas Figueiredo");
p1.style.backgroundColor = "red";