var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to the 10th meetup of dockerrrrr!!!');
}).listen(8080); 