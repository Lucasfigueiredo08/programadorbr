let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

// let img = document.getElementById("red")

let img = new Image()
img.src = "./imagens/man.png"

img.onload = desenharImg

function desenharImg(){
    ctx.drawImage(img, 20, 20, this.naturalWidth/2, this.naturalHeight/2 )
}