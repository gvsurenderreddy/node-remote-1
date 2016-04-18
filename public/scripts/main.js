$(document).ready(function(){

	var socket = io();
	var typingTimer;                
	var doneTypingInterval = 1500;  
	var $input = $('#ytSearch');

	var searchUrl = 'http://192.168.1.103:3000/ytsearch';

	socket.on('number', function(data){
		console.log(data);
	});

	$input.on('keydown', function () {
	  clearTimeout(typingTimer);
	  typingTimer = setTimeout(doneTyping, doneTypingInterval);
	});

	function doneTyping () {
	  var searchTerm = $input.val();
	  // alert(searchTerm);
	  $.post(searchUrl, {"vidTerm":searchTerm}, function(data){
	  	if(data){
	  		for(var i=0; i<data.items.length; i++){
	  			$('#results').append("<div class='row'><div class='col-xs-12'>" + data.items[i].snippet.title + "</div></div>");
	  		}
	  	}else{
	  		alert("no data");
	  	}
	  });
	}

	




	
});