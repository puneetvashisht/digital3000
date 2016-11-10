var fs = require('fs');
//sync
//var content = fs.readFileSync("./config.json");
//console.log(typeof content)
//console.log(content.toString())
//console.log(JSON.parse(content).port)

//async
fs.readFile("./config.json", function(err, data){
	if(err) console.log(err);
	
	console.log("Data is available ")
	console.log(data)
})

console.log("After async read")
