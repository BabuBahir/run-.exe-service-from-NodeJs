var express = require('express');
var app = express();
var Promise=require('bluebird');
var cmd=require('node-cmd');

	 
const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })
 

 
app.get('/start/', function(req, res){
   
   getAsync('net start RohitService').then(data => {
	   res.send(data);	 
	}).catch(err => {
	  console.log('cmd err', err)
	  res.send(data);
	})
 
});

app.get('/stop/', function(req, res){
   
   getAsync('net stop RohitService').then(data => {
	   res.send(data);	 
	}).catch(err => {
	  console.log('cmd err', err)
	  res.send(data);
	})
});


// use port 3000 unless there exists a preconfigured port
var port = process.env.port || 3000;

app.listen(port, function (item){  console.log(' App started at port ' + port ); })
