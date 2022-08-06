 const http = require('http');
 const url = require('url');
 const fs = require('fs');

 function handleFile(req, res, callback) {
   
   let path = url.parse(req.url).pathname;
   

   // if(path == "" || path == "/") { 
   //     path = "/index.html";
   // }
   let fileName = "." + path;

   fs.readFile(fileName, (err, data) => {
     if (err) {

       if(callback) {
         if(!callback(req, res)) {
            res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
            res.end("<h1>404 Not Found</h1>");
         };
       }

     } else {
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.end(data);
       res.end();
     }
   });

}

function handleRequest(req, res) {
   let path = url.parse(req.url).pathname;

   if(path == "/teste"){
      res.end("Teste");
      return true;
   }
   return false;
}

 http.createServer((request, response) => {
   //  response.writeHead(200, {'Content-Type': 'application/json'});
   //  response.end(JSON.stringify({texto: "<h1>Hello World</h1>"}));

   handleFile(request, response, handleRequest);

   }).listen(3000, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
    console.log('server is listening on 3000')
 })