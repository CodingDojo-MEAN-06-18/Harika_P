module.exports = function Route(app, server){
    var io = require('socket.io').listen(server)
  	// root route to render the index.ejs view
  	app.get('/', function(req, res) {
  		res.render("index");

    })
    io.sockets.on('connection', function (socket){
		//server listens to  event
	 	socket.on("change_color", function (data){
		  //will emit the data to the client
      console.log(data);
		  io.emit('new_color', {data});
			//socket.emit('random_number', {response: random_number});
		})
	})
};
