var http = require('http');
var formidable = require('formidable');

http.createServer(function(req,res){

if(req.url == '/fileUpload'){
var form = new formidable.IncomingForm();
form.parse(req, function(err, fields, files){
res.write('File Uploaded');
res.end();
});
}
else{
res.writeHead(200, {'Content-Type':'text/html'});
res.write('<form action="fileUpload" method="post">');
res.write('<input type="file" name="fileToUpload"> <br>');
res.write('<input type="submit">');
res.write('</form>');
res.end();
}
}).listen(8080);