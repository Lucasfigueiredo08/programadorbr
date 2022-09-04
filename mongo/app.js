const express = require('express');
const  app = express();
const port = 3000;
const mongoose = require('mongoose')
const linkRoute = require('./routes/linkRoute')

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

app.use('/', linkRoute)


app.listen(port, () => {
    console.log(`Example app listening  on port ${port}`)
})