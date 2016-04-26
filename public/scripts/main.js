$(document).ready(function(){

	var socket = io();

	socket.on('play', function(data){
        $('#playercontainer').css('display', 'block');

        player.loadVideoById(data);
        player.playVideo();
	});


});