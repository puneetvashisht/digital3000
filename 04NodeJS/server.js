var express = require('express');
var bodyParser = require('body-parser');

var server = express();
server.use(express.static(__dirname+"/WebContent"))

// req to convert into json
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

server.listen(4242, "localhost", function(){
	console.log('Server is running at localhost:4242')
});

/*
server.get('/', function(req, res){
	console.log("Coming from client");
	res.send({success: true})
})
*/

server.get('/hello', function(req, res){
	console.log("Coming from client with url /hello");
	res.send("Hello World")
})

server.post('/user', function(req, res){
	console.log(req.body)
	console.log("user is coming from client");
	res.send("Username is : "+req.body.name)
})