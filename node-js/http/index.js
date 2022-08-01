 const http = require('http');
 const url = require('url');
 const fs = require('fs');

 http.createServer((request, response) => {
   //  response.writeHead(200, {'Content-Type': 'application/json'});
   //  response.end(JSON.stringify({texto: "<h1>Hello World</h1>"}));

   let path = url.parse(request.url).pathname;
   

   if(path == "" || path == "/") { 
       path = "/index.html";
   }
   let fileName = "." + path;

   fs.readFile(fileName, (err, data) => {
     if (err) {
       response.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
       response.end("<h1>404 Not Found</h1>");
     } else {
       response.writeHead(200, {'Content-Type': 'text/html'});
       response.end(data);
     }
   });

   }).listen(3000, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
    console.log('server is listening on 3000')
 })