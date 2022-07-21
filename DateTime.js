var http = require('http');
var dt = require('./Module.js');

http.createServer( function (req,res){
  res.writeHead(200 , {'Content-Type':'text/html'});
  res.write('Current Date and Time : ' + dt.DateTime());
  res.end();
}).listen(8080);
