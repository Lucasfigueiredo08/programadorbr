const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./model/posts');

const app = express();



app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
})

app.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;

    posts.postNew(title, description);

    res.send("Post adicionado com sucesso");
})

function generateId() {
    return Math.random().toString(36).substring(2,9);
}

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})