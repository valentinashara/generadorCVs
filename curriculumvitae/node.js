var http = require("http")
var fs = require("fs")

http.createServer(function(req,res){
	fs.readFile("./cargaDeDatos.html",function(err,html){
		res.write(html);
		res.end()
	});
}).listen(8080);