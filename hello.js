var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Well Hello  worlds guys this is future automation!');
}).listen(8080); 