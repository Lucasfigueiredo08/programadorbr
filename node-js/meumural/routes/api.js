const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('../model/posts');

const options = {
    origin: 'http://localhost:3000',
}

router.use(cors(options));

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
})

router.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;

    posts.postNew(title, description);

    res.send("Post adicionado com sucesso");
})

// funcionando
// router.delete("/delete", bodyParser.json(), (req, res) => {

//     let id = req.query.id;

//     posts.deletePost(id);

//     res.send("Post deletado com sucesso");
// })

// router.del("/delete/:id", bodyParser.json(), (req, res) => {

//     let id = req.query.id;

//     posts.deletePost(id);

//     res.send("Post deletado com sucesso");
// })

router.delete("/delete/:id", bodyParser.json(), (req, res) => {
    let id = req.params.id;
    posts.deletePost(id);
    res.send("Post deletado com sucesso");
})




module.exports = router;