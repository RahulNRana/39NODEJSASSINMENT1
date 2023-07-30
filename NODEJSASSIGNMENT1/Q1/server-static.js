const http = require('http');
const url = require('url');
const static = require('node-static');

const fileServer = new static.Server('./test');

var server = http.createServer(function(request, response) {
	//request.addListener('end',function(){}).resume();
    response.write("Hello");
    response.end();
    request.addListener('end', function () {
    	fileServer.serve(request, response);   
    }).resume();
    
}).listen(7878);
console.log("Listening on port number 7878");