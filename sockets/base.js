module.exports = function (io) {


	io.sockets.on("connection", function(socket){

		socket.on('play', function(data){
			console.log("play video id " + data);
			io.emit("play", data);
		});

	});

	//   io.emit('event', data);



}