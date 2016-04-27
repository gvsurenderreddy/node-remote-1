//create child process to run shell commands
var sys = require('sys')
var exec = require('child_process').exec;
var child;

module.exports = function (io) {


	io.sockets.on("connection", function(socket){
		
		socket.on('play', function(data){
			console.log("playing video id " + data);
			
			child = exec("omxplayer `youtube-dl -g https://youtube.com/watch?v=" + data  + "`", function (error, stdout, stderr) {
  				sys.print('stdout: ' + stdout);
				sys.print('stderr: ' + stderr);
				if (error !== null) {
					console.log('exec error: ' + error);
				}
			});

		});

	});

}
