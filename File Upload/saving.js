var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(req,res){
if(req.url == '/fileUpload'){
var form = new formidable.IncomingForm();
form.parse(req, function(err, fields, files){
var oldpath = files.fileToUpload.filepath;
var newpath = 'C:/Users/user/' + files.fileToUpload.originalFilename;
fs.rename(oldpath,newpath, function(err){
if(err) 
throw err;
res.write('File uploaded and moved');
res.end();
});
});
}
else{
res.writeHead(200, {'Content-Type':'text/html'});
res.write('<h1>Form</h1>');
res.write('<form action="fileUpload" method="post">');
res.write('<input type="file" name="fileToUpload"> <br><br>');
res.write('<input type="submit">');
res.write('</form>');
res.end();
}
}).listen(8080);