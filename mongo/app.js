const { errorMonitor } = require('events');
const express = require('express');
const { chmod } = require('fs');
const  app = express();
const port = 3000;
const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/links', (error, db) => {
//     console.log(error)
//     console.log(db)
// })

// mongoose.connect('mongodb://localhost/links').then(db =>{
//     console.log(db)
// }).catch(error => {
//     console.log(error)
// })  

mongoose.connect('mongodb://localhost/links', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

let db = mongoose.connection;

db.on("error", () => {
    console.log("deu errado")
})

db.once("open", () => {
    console.log("deu certo")
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Example app listening  on port ${port}`)
})