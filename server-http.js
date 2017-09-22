// load http module
// and store returned HTTP instance into an http variable
var http = require("http");

// use http instance and call method to create server
http.createServer(function(request, response){
	//Send HTTP header
	//HTTP status : 200 : OK
	//Content Type : text/plain
	response.writeHead(200, {'content-type':'text/plain'});

	// Send response body as "Hello World"
	response.end("Hello World\n")
}).listen(8081,'localhost');

// Console will print the message
console.log("Server will running at http://127.0.0.1:8081");
