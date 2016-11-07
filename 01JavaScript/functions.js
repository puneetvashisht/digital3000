function add(){
	console.log(2+5);
}
//7

function add(){
	return 2 + 5;
}

var sum = add();//7

function add(fn, sn){
	return fn+sn;
}

var sum = add();//NaN
var sum = add(4,8);//12


// function can be called inside another functions
function addAll(){
	var sum = 0;
	for(var i=0;i<arguments.length;i++){
		sum = add(sum, arguments[i]);
	}
	return sum;
}
addAll(3, 6, 6)
addAll(3, 6, 6, '6')



function addAll(){
	var sum = 0;
	for(var i=0;i<arguments.length;i++){
		sum = add(sum, +arguments[i]);
	}
	return sum;
}
addAll(3, 6, 6, '6')
addAll(3, 6, 6, 'hello')



function addAll(){
	var sum = 0;
	
	
	for(var i=0;i<arguments.length;i++){
		if(!isNaN(arguments[i])){
			sum = add(sum, +arguments[i]);
		}
		
	}
	
	return sum;
}
addAll(3, 6, 6, '6')
addAll(3, 6, 6, 'hello', '6')

// function in variable ??
var addAllNumbers = addAll;
addAllNumbers(3, 6, 6, 'hello', '6')




//anonymous functions, function without any name

var greet = function(user){
	console.log("Welcome "+user);
}
greet("Puneet")






// complex function
var operators = {
	'-': function(fn, sn){ return fn-sn; },
	'*': function(fn, sn){ return fn*sn; }
}

var cal = function(operand1, operand2, operator){
	return operators[operator](operand1, operand2);
}
cal(4,2,'-')//2
cal(4,2,'*')//8





// class in javascript
function Person(name, age){
	this.name = name;
	this.age = age;
	
	this.showDetails = function(){
		console.log("Person name : "+this.name)
		console.log("Person age : "+this.age)
	}
	
}
var ram = new Person('Ram Kapoor', 22)


// functions as arguments, callback

var openFile = function(callback1, callback2, callback3){
	console.log("Openning a file");
	callback1(callback2, callback3);
}

var readFile = function(callback1, callback2){
	console.log("Reading a file");
	callback1(callback2);
	//callback2();
}

var writeFile = function(callback1){
	console.log("Writing a file");
	callback1();
	
}

var closeFile = function(){
	console.log("Closing a file");
}

openFile(readFile, writeFile, closeFile);


















