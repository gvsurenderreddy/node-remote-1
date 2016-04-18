module.exports = function (io) {


	io.sockets.on("connection", function(socket){

		socket.on("test", function(data){
			console.log(data);
			io.emit("test2", "test2data");
		});

	});

	//   io.emit('event', data);



}