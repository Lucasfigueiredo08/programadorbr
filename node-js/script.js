let args = process.argv.slice(2)

console.log(args)

let a = Number(args[1])
let b = Number(args[2])
let c = ""

if(args[0] === "mult") {	c = a * b } else if 
(args[0] === "div") { c = a / b } else if
(args[0] === "sub") { c = a - b } else if
(args[0] === "sum") { c = a + b } else 
{ console.log("Invalid operation") }

function soma(x, y) {
    return x + y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

function sub(x, y) {
    return x - y;
}

console.log(c)

