var express = require('express');
var app = express();
var Promise=require('bluebird');
var cmd=require('node-cmd');

	 
const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })
 

 
app.get('/start', function(req, res){
   
   getAsync('net start RohitService').then(data => {
	   res.send(data);	 
	}).catch(err => {
	  console.log('cmd err', err)
	  res.send(err);
	})
 
});

app.get('/stop', function(req, res){
   
   getAsync('net stop RohitService').then(data => {
	   res.send(data);	 
	}).catch(err => {
	  console.log('cmd err', err)
	  res.send(err);
	})
});

app.get('/test', function(req, res){   
    res.send('ok')
});


// use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 5000;
const host = '0.0.0.0';


app.listen(port, host,   function (item){  console.log(' App started at port ' + port ); })
