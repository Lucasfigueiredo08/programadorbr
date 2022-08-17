const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let users = [{
    name: 'John Doe',
    phone: '+3809912345678',
}, {
    name: 'Jane Doe',
    phone: '+3809987654321',
}, {
    name: 'Jack Doe',
    phone: '+3809976543210',
}];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('user', {users}/*{name: 'John Doe', phone: '+380991234567'}*/);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})