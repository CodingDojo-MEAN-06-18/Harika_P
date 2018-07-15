var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
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
var count =0;
io.sockets.on("connection", function(socket){

    //server listens to "pressing_button" event
    socket.on("posting_form", function(data){
      count++;
      //emit data to client
      socket.emit("counter", count);
      console.log("count is ", count);
    })

    socket.on("reset_req", function(data){
      count =0;
      //emit data to client
      socket.emit("reset", count);
    })


  })
