var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to the 10th anniversary meetup of docker again 10 times trial');
}).listen(8080); 