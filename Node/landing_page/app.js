var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){

  if(request.url === '/'){
    fs.readFile('index.html','utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
        response.write(contents);  //  send response body
        response.end(); // finished!
    });

  }


  //for ninjas page:

  else if(request.url === '/ninjas'){
    fs.readFile('ninjas.html','utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
        response.write(contents);  //  send response body
        response.end(); // finished!
    });

  }

  else if(request.url === '/dojos'){
    fs.readFile('dojos.html','utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
        response.write(contents);  //  send response body
        response.end(); // finished!
    });

  }

  else {
    fs.readFile('error.html','utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
        response.write(contents);  //  send response body
        response.end(); // finished!
    });
      //response.writeHead(404);
      //response.end('File not found!!!');
  }

});
server.listen(6789);
