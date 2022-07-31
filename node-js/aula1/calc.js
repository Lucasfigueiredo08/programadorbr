

// let calc = {
//     soma: (x, y) => {
//         return x + y;},
//     mult: (x, y) => { 
//         return x * y; },
//     div: (x, y) => { 
//         return x / y; },
//     sub: (x, y) => { 
//         return x - y; },
//     mod: (x, y) => {
//         return x % y; },
//     exp: (x, y) => {
//         return x ** y;},
//     raiz: (x) => {
//         return Math.sqrt(x);},
//     log: (x) => {
//         return Math.log(x);},
//     sen: (x) => {
//         return Math.sin(x);},
//     cos: (x) => {
//         return Math.cos(x);},
//     tan: (x) => {
//         return Math.tan(x);},
//     cot: (x) => {
//         return 1 / Math.tan(x);},
//     sec: (x) => {   
//         return 1 / Math.cos(x);},
//     csc: (x) => {
//         return 1 / Math.sin(x);},   
//     asen: (x) => {
//         return Math.asin(x);},
//     acos: (x) => {
//         return Math.acos(x);},  
//     atan: (x) => {
//         return Math.atan(x);},
//     acot: (x) => {
//         return Math.atan(1 / x);}, 
//     asec: (x) => {  
//         return Math.acos(1 / x);},
// }

// module.exports = calc;


//Arrow function
// module.exports.soma = (x, y) => {
//     return x + y;
// }

// module.exports.mult = (x, y) => {   
//     return x * y;
// }   

module.exports.soma = function soma(x, y) {
    return x + y;
}