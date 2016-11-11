var express = require('express');
var bodyParser = require('body-parser');

var Mongodb = require('mongodb');
var MongoClient = Mongodb.MongoClient;

MongoClient.connect("mongodb://localhost:27017/pollsdb", function(err, db){
	if(err) throw err;
	
	console.log("db connection has been established");
	
	
	
	var server = express();
	server.use(express.static(__dirname+"/static"))

	server.use(bodyParser.json());
	server.use(bodyParser.urlencoded({extended: false}));

	server.listen(4242, "localhost", function(){
		console.log('Server is running at localhost:4242')
	});
	
	
	server.get("/getPolls", function(req, res){
		db.collection("polls").find().toArray(function(err, result){
			if(err) throw err;

			console.log(result)
			res.send(result);
		})
	})
})

