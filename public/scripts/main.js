$(document).ready(function(){

	var socket = io();

	socket.on('play', function(data){
		console.log(data);
	});


	
});