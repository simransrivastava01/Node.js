var http = require('http');

http.createServer(function(req,res){
res.writeHead(200, {'Content-Type':'text/html'});
res.write('<h1>Form</h1>');
res.write('<form action="fileUpload" method="post">');
res.write('<input type="file" name="fileToUpload"> <br><br>');
res.write('<input type="submit">');
res.write('</form>');
res.end();
}).listen(8080);