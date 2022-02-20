// var x = 7;
// nao permite que a variável não seja declarada 

// aula 1 
// 'use strict'

// function imprimir(){
//     var x = 7;
//     console.log(x);
// }

// imprimir();
// console.log(x)
// console.log(window);

// Aula 2 - function
// let dog = {
//     sound: "au au",
//     speak: function () {
//         console.log(this.sound);
//     }
// }

// let cat = {
//     sound: "miau",
//     speak: function () {
//         console.log(this.sound);
//     }
// }

function speakGeneric(){
    console.log(this.sound)
}

let cat = {
        sound: "miau",
        speak: speakGeneric
}
let dog = {
        sound: "au au",
        speak: speakGeneric
}



// dog.speak();
// cat.speak();

let blindedFunction = speakGeneric.bind(cat);

blindedFunction();

