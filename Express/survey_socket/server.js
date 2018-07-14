const express = require("express");
const path = require("path");
var bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname + "./static")));
app.use(bodyParser.urlencoded({extended : true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
    res.render('index');
})


var server = app.listen(8000, function() {
	console.log("listening on port 8000");
})

const io = require('socket.io').listen(server);
var counter = 0;
io.sockets.on('connection', function (socket){
		//server listens to "posting_form" event
	 	socket.on("posting_form", function (data){
	 		//generate a random number
	 		var random_number = Math.floor((Math.random() * 1000) + 1);
		  //will emit the data to the client
		  socket.emit('updated_message', {response: data});
			socket.emit('random_number', {response: random_number});
		})
	})
