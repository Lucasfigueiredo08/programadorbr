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

app.post("/new", (req, res) => {
    
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})