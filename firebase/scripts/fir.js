const firebaseConfig = {
    apiKey: "AIzaSyBDAH8tisq6X1wtgcymDEKk0cnNOESTcRM",
    authDomain: "teste-1f4e0.firebaseapp.com",
    projectId: "teste-1f4e0",
    storageBucket: "teste-1f4e0.appspot.com",
    messagingSenderId: "945743194282",
    appId: "1:945743194282:web:3adc563330d39a5d8fc8d3"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

let auth = firebase.auth();

// function criarUsuario()
// {
//     let newUserEmail = "novoteste@teste.com";
//     let newUserPassword = "123abc";

//     auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
//     .then(user => {
//         console.log(user);
//     }).catch(error => {
//         console.log(error);
//     });
// }

function login(){

    let userEmail = "novoteste@teste.com";
    let userPassword = "123abc";


    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
        auth.signInWithEmailAndPassword(userEmail, userPassword).then(loggedUser => {
            // console.log(loggedUser);
            console.log(auth.currentUser);
        }).catch(error => {
            console.log(error);
        });
    }).catch(error => {
        console.log(error);
    })
// login();
};
auth.onAuthStateChanged(user => {
   if (user) {
         console.log(user);
   } else {
         console.log("Não está logado");
   }
});

function logout(){
    auth.signOut().then(() => {
        console.log("Deslogado");
    }).catch(error => {
        console.log(error);
    });
}

setTimeout(logout, 2000)