$(document).ready(function(){

	var socket = io();

	$('#testButton').on('click', function(){
		socket.emit("test", "testerino");
	});

	socket.on('number', function(data){
		console.log(data);
	});

	




	
});