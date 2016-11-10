var express = require('express');
var bodyParser = require('body-parser');

var server = express();

server.listen(4242, "localhost", function(){
	console.log('Server is running at localhost:4242')
});

server.get('/', function(req, res){
	console.log("Coming from client");
	res.send({success: true})
})