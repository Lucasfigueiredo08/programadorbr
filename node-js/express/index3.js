const express = require('express');
const path = require('path');

const app = express();

const PORT = 5000;

app.use("/meusite", express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
        // res.type("html");
        res.send("<h1>Hello World from GET</h1>");
})

app.post('/', (req, res) => {
        // res.type("html");
        res.send("<h1>Hello World from POST</h1>");
})

app.put('/', (req, res) => {
        // res.type("html");
        res.send("<h1>Hello World from PUT</h1>");
})

app.delete('/', (req, res) => {
        // res.type("html");
        res.send("<h1>Hello World from DELETE</h1>");
})

app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
})