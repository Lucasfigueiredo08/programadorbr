// let tela = document.getElementById("tela")

// let ctx = tela.getContext("2d")
// ctx.moveTo(0,0)
// ctx.lineTo(250,250)
// ctx.lineTo(500,0)
// ctx.strokeStyle = "#FF0000"
// ctx.lineWidth = 5;
// ctx.stroke();


let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim:0, //,
    antiHor: true
}

function drawCircle(c) {

    ctx.beginPath();
    ctx.rect(0,0,500,500)
    ctx.fillStyle = "beige"
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);
    ctx.fill();
    ctx.stroke();

}


setInterval(function () {
    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.5;
        circle.x += 3; //movimenta o circulo
    }

    drawCircle(circle)
}, 50)

// drawCircle(circle);