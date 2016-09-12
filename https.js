var https = require('https')
var fs = require('fs')

var options = {
	key: fs.readFileSyns('ssh_key.pem')
	cert: fs.readFileSyns('ssh_cert.pem')
}

https
	.createSever(options,function(req,res){
		res.writeHead(200);
		res.end('Hello Mr.Jarvis')
	})
	.listen(8090)
