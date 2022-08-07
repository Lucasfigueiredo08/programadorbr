const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let posts = [
    {
        id: 'erstes',
        title: 'Erstes Post',
        description: 'Das ist das erste Post'
    }
]

app.get("/all", (req, res) => {
    res.json(posts);
})

app.post("/new", bodyParser.json(), (req, res) => {
    let id = generateId();
    let title = req.body.title;
    let description = req.body.description;
    posts.push({id, title, description})
    res.send("Post adicionado com sucesso");
})

function generateId() {
    return Math.random().toString(36).substring(2,9);
}

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})