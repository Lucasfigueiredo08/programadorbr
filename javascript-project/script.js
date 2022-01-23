// console.log("Olá mundo");
// alert("ola mundo");

// var a;

// var b = "hd";

// a = "Placa de captura";

// b = a;

// console.log(b);

// boolean 
// null
// undefined
// number
// string

// var a = "";


// Operadores 

// var a = 10;
// var b = 15;

// var c = a + b;
//% * - / --a ++a

//Atribuiçõess
// var  a = 30;
// a += 5;

// console.log(a);
// a += 2;
// a /= 20;
// a %= 28;

// Operadores de comparação

/*
== === != !== > < >= <= 
*/ 


// Operadores lógicos

/*
&& - E
|| - OU
*/

// var idade = 9;

// var menor10 = idade <= 10;
// var maior65 = idade >= 65;

// var gratuidade = menor10 && maior65;

//String

// var numero = "88" * 2;

// var str = "Valor qualquer " *2;

// console.log(str);

// Transformando string em número

// var a = "3";

// var b = "9.5";

// var c = parseInt(a) + parseInt(b);
// var d = parseFloat(a) + parseFloat(b);

// console.log(d);

//Alert e prompt

// alert("Bom dia, Lucas");

// var numero = parseInt(prompt("Digite um número"));

// var dobro = numero + numero;

// alert("O dobro de " + numero + " é " + dobro);

//Estruturas condicionais
// if / else/ else if

//Operador ternario

// var idade = 17;

// var pode = idade >= 18? console.log("pode") : console.log("nao pode");

// Switch case

// While

    // var numero = Math.random() * 100;

    // while(numero < 90)
    // {
    //     console.log(numero);
    //     numero = Math.random() * 100;
    // }

    // console.log(numero);
    // console.log("acabou");

    //ARRAY

    // var alunos = [ "Igor","José", "Marcos", "Mariana", "Joana"];

    // for (var i = 0; i < alunos.length; i++){
    //     console.log(alunos[i]);
    // }

    // for (var i in alunos){ //index
    //     console.log(i);
    // }

    //  for (var aluno of alunos){ //valor
    //     console.log(aluno);
    // }

    //Funções

    // function media(n1, n2) {
    //     var nota1 = n1;
    //     var nota2 = n2;
    //     var media = (nota1 + nota2) / 2;

    //     return media;
    // }

    // var resultado1 = media(7,7);
    // var resultado2 = media(7,8);

    // console.log(resultado1 + " " + resultado2);

    // Função anonima
    // var media = function (n1, n2) {
    //     return (n1 + n2) / 2;
    // }

    // var m = media(5, 6);
    // var m2 = media;

    // console.log(m);
    // console.log(m2(3,4));

    //SISTEMA DE COLÉGIO 

    // var nomes = ["Igor", "José", "Maria"];
    // var notaA = [7.0,6.5,9.5];
    // var notaB = [8.0,7.0,8.5];

    // function media(n1, n2){
    //     return (n1+n2)/2;
    // }

    // function passou(media){
    //     if (media > 7){
    //         return "Aprovado";
    //     } else{
    //         return "Reprovado";
    //     }
    // }

    // for(var index in nomes) {

    //     var nota1 = notaA[index];
    //     var nota2 = notaB[index];

    //     var m = media(nota1,nota2);
        
    //     console.log(nomes[index] +
    //         " - " +
    //         nota1 +
    //         " - " +
    //         nota2 +
    //         " - " +
    //         passou(m)
    //         );
    // }

    //OBJETOS = { } | Array = [ ] PROPRIEDADES

    // var aluno = {
    //     nome: "Joao",
    //     notas: [7.5,8.0]
    // }

    // var aluno1 = new Object();
    // aluno1.nome = "lucas";
    // aluno1.notas = [8,9];

    // var aluno2 = new Object({
    //     nome: "Igor",
    //     notas: [7,8]
    // });

    // var novaProp = "LastName";

    // aluno.matricula = 12345;

    // aluno["teste"] = "teste";
    // aluno[novaProp] = "Oliveira";

    // console.log(aluno);

    //OBJETOS MÉTODOS

    // function calcMedia(/*n1, n2*/) {
    //     return (this.notas[0]+this.notas[1])/2;
        // return (n1+n2) / 2;
    // }

    // var aluno = {
    //     nome: "Lucas",
    //     notas: [9,8],
    //     media: calcMedia
    // }

    // var aluno1 = {
    //     nome: "Joao",
    //     notas: [10,9],
        // media: calcMedia

        // media: function(){
        //     return (this.notas[0]+ this.notas[1]/2)/
        // }
    // }

    // console.log(aluno.nome);
    // console.log(aluno.media());

    // console.log(aluno1.nome);
    // console.log(aluno1.media());

    // CONSTRUTOR

    // function criarAluno(nome, n1, n2){

    //     return {
    //         nome: nome,
    //         nota1: n1,
    //         nota2: n2,
    //         media: function (){
    //             return (this.nota1 + this.nota2) / 2;
    //         }
    //     }
    // }

    // function aluno(nome, n1, n2) {

    //     this.nome = nome;
    //     this.nota1 = n1;
    //     this.nota2 = n2;
        
    //     this.media = function () {
    //         return (this.nota1 + nota2) / 2;
    //     }
    // }



    // var calcMedia = function() {
    //     return (this.nota1 + this.nota2) / 2;
    // }

    // var turma = [
        // {
        //     nome: "Lucas",
        //     nota1: 9,
        //     nota2: 7,
        //     media: calcMedia
        // },
        // {
        //     nome: "João",
        //     nota1: 10,
        //     nota2: 7,
        //     media: calcMedia
        // }
    //     criarAluno("Igor", 10,3),
    //     criarAluno("Joao", 7, 8),
    //     criarAluno("Marcela", 5, 9)
    // ]

    // var aluno = turma[1];

    // var a = new aluno("teste", 10, 4);


    // console.log(aluno);
    // console.log(aluno.media());
    // console.log(a.media());

    // turma.forEach( function(elemento){
    //     console.log(elemento);
    // })

    // for (var aluno of turma){
    //     console.log(aluno.nome + " - " + aluno.media());
    // }

    //DATA

    // var d = new Date();
    // var e = new Date(2018, 08, 22, 15,30);
    // var f = new Date(1000 * 60 * 60 * 24);
    // var g = new Date("sep 05 2017 23:25")
    // var h = new Date("05-15-1999");

    // console.log(d.get)

    // console.log(h);

    
// var d = new Date();
// var d = new Date(milliseconds);
// var d = new Date(dateString);
// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);​



// ​Métodos para manipular datas:
// getDate()	Returns the day of the month (from 1-31)
// getDay()	Returns the day of the week (from 0-6)
// getFullYear()	Returns the year
// getHours()	Returns the hour (from 0-23)
// getMilliseconds()	Returns the milliseconds (from 0-999)
// getMinutes()	Returns the minutes (from 0-59)
// getMonth()	Returns the month (from 0-11)
// getSeconds()	Returns the seconds (from 0-59)
// getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
// getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
// getUTCDate()	Returns the day of the month, according to universal time (from 1-31)
// getUTCDay()	Returns the day of the week, according to universal time (from 0-6)
// getUTCFullYear()	Returns the year, according to universal time
// getUTCHours()	Returns the hour, according to universal time (from 0-23)
// getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
// getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)
// getUTCMonth()	Returns the month, according to universal time (from 0-11)
// getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
// getYear()	Deprecated. Use the getFullYear() method instead
// now()	Returns the number of milliseconds since midnight Jan 1, 1970
// parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
// setDate()	Sets the day of the month of a date object
// setFullYear()	Sets the year of a date object
// setHours()	Sets the hour of a date object
// setMilliseconds()	Sets the milliseconds of a date object
// setMinutes()	Set the minutes of a date object
// setMonth()	Sets the month of a date object
// setSeconds()	Sets the seconds of a date object
// setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970
// setUTCDate()	Sets the day of the month of a date object, according to universal time
// setUTCFullYear()	Sets the year of a date object, according to universal time
// setUTCHours()	Sets the hour of a date object, according to universal time
// setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
// setUTCMinutes()	Set the minutes of a date object, according to universal time
// setUTCMonth()	Sets the month of a date object, according to universal time
// setUTCSeconds()	Set the seconds of a date object, according to universal time
// setYear()	Deprecated. Use the setFullYear() method instead
// toDateString()	Converts the date portion of a Date object into a readable string
// toGMTString()	Deprecated. Use the toUTCString() method instead
// toISOString()	Returns the date as a string, using the ISO standard
// toJSON()	Returns the date as a string, formatted as a JSON date
// toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
// toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
// toLocaleString()	Converts a Date object to a string, using locale conventions
// toString()	Converts a Date object to a string
// toTimeString()	Converts the time portion of a Date object to a string
// toUTCString()	Converts a Date object to a string, according to universal time
// UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
// valueOf()	Returns the primitive value of a Date object


