$(document).ready(function(){

	var socket = io();


	socket.on('test2', function(data){
		console.log(data);
	});

	socket.on('play', function(data){
		console.log(data);
	});


	
});