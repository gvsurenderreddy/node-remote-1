$(document).ready(function(){

	var socket = io();


	socket.on('test2', function(data){
		console.log(data);
	});



	
});