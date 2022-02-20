let dobro = () => { console.log(this)};

let dobro = x =>  2 * x;

// let dobro = function () {
//     console.log(this)
// }

let numero = {
    x: 8,
    d: dobro
}

dobro = dobro.bind(numero)

numero.d()
// console.log(numero.d());



