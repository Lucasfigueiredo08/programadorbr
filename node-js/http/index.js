 const http = require('http');

 http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify({texto: "<h1>Hello World</h1>"}));
 }).listen(3000, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
    console.log('server is listening on 3000')
 });