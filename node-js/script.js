let calc = require('./calc');
let args = process.argv.slice(2)

let a = Number(args[1])
let b = Number(args[2])
let c = "";

if(args[0] == 'mult') {	
    c = calc.mult(a, b) 
} else if (args[0] == 'div') { 
    c = calc.div(a, b) 
} else if(args[0] == 'sub') { 
    c = calc.sub(a, b)
 } else if(args[0] == 'sum') {
     c = calc.sum(a,b)
} else if(args[0] == 'sen') {
        c = calc.sen(a,b) 
} else if(args[0] == 'cos') {
        c = calc.cos(a,b) 
} else if(args[0] == 'tan') {
        c = calc.tan(a,b) 
} else if(args[0] == 'cot') {
        c = calc.cot(a,b) 
} else if(args[0] == 'sec') {
        c = calc.sec(a,b) 
} else if(args[0] == 'asen') {
        c = calc.asen(a,b) 
} else if(args[0] == 'asec') {
        c = calc.asec(a,b) 
} else if(args[0] == 'acos') {
        c = calc.acos(a,b) 
} else if(args[0] == 'atan') {
        c = calc.atan(a,b) 
} else if(args[0] == 'acot') {
        c = calc.acot(a,b) 
} else if(args[0] == 'csc') {
        c = calc.csc(a,b) 
    } else {
         c = "Operação inválida"
}

console.log(c)

