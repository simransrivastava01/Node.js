var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr,true);


var http = require('http');

http.createServer(function(req,res){
res.write(q.host + "\n"+ q.pathname+ "\n"+ q.search +"\n");

var qdata = q.query;
res.write(qdata.month);

res.end();
}).listen(8080);
