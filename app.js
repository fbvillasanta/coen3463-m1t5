/* var express = require("express");
 var app = express();

 app.get('/', function(req, res) {
    res.send('Hello World!');
  });

 var port = Number(process.env.PORT || 5000);
 app.listen(port, function() {
    console.log("Listening on " + port);
 });*/

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

/*app.get('/', function(req, res){
	res.send('HELLO WORLD!');
});

app.get('/home/:name?', function(req, res){
	var name = req.params.name;
	res.send('HOME of ' + name );
});

app.get('/about', function(req, res){
	//res.sendFile('about.html', {"root":__dirname});
	var absPath = path.join(__dirname, 'about.html');
	console.log(absPath);
	res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/services', function(req, res){
	res.sendFile(path.join(__dirname, 'services.html'));
});*/

app.listen('3000', function(){
	console.log('Express is runnning on port 3000');
});