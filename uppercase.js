var http = require('http');
var uc = require('upper-case');

http.createServer(function(req,res){
res.writeHead(200, {'Content-Type':'text/html'});
res.write('Hello World in upper case will look like '+ uc.upperCase("Hello World"));
res.end();
}).listen(8080);
