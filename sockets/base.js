module.exports = function (io) {


	io.sockets.on("connection", function(socket){

		socket.on("test", function(data){
			console.log(data);
		});

	});

	// setInterval( function() {

	//   var msg = Math.random();
	//   io.emit('number', msg);
	//   console.log (msg);

	// }, 10000);


}