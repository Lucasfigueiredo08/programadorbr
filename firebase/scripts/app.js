
var config = {
    apiKey: "AIzaSyD46jHltBD9AoStPLVRUF_FwQ3jHOYjSrY",
    authDomain: "colegio-a6804.firebaseapp.com",
    projectId: "colegio-a6804",
    storageBucket: "colegio-a6804.appspot.com",
    messagingSenderId: "604545120369",
    appId: "1:604545120369:web:788e89985e7e724b23c3d0",
    measurementId: "G-5QE0E7EZ9N"
  };
  // versão antiga do firebase
firebase.initializeApp(config);

let db = firebase.firestore();

// ler todos os dados da minha coleção
// db.collection("turmaA").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         let aluno = doc.data();
//         console.log(aluno.nome);
//     });
// })

// trazendo um documento especifico
// let docRef = db.collection("turmaA").doc("hK8dOBnXkcTOwwhRaeD0");

// docRef.get().then((doc) => {
//   // let aluno = doc.data();
//   console.log(doc.data().nome);
// })
// db.collection("turmaA").where("nome", "==", "Lucas").get()
// .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno.nome, aluno.sobrenome);
//     })
// })

// db.collection("turmaA").where("nome", ">=", "Lucas").get()
// .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno.nome, aluno.sobrenome);
//     })
// })

// db.collection("turmaA").where("nome", ">=", "Lucas")
// .where("nome", "<=", "Teste")

// .get()
// .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno.nome, aluno.sobrenome);
//     })
// })

db.collection("turmaA").where("notas.nota1", ">", 5)
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let aluno = doc.data();
      console.log(aluno.nome, aluno.sobrenome);
    })
})