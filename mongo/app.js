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

const linkSchema = new mongoose.Schema({
    title: {type: String, required: true },
    description: String,
    url: {type: String, required: true},
    click: {type: Number, default: 0}
})

const Link = mongoose.model('Link', linkSchema)

let link = new Link({
    title: 'Lucas Figueiredo 3',
    description: 'Twitter do Lucas 2',
    url:'http://twitter.com/lucasfigueiredo008',
})

link.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log(err)
})

mongoose.connect('mongodb://localhost/newLinks', {
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