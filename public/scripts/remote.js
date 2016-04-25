$(document).ready(function(){

	var url = window.location.href;
	url = url.substr(0, url.length-7);

	var socket = io();
	var typingTimer;                
	var doneTypingInterval = 1500;  
	var $input = $('#ytSearch');

	var searchUrl = url + '/ytsearch';

	$input.on('keydown', function () {
	  clearTimeout(typingTimer);
	  typingTimer = setTimeout(doneTyping, doneTypingInterval);
	});

	function doneTyping () {
	  var searchTerm = $input.val();
	  $.post(searchUrl, {"vidTerm":searchTerm}, function(data){
	  	if(data){
	  		$('#results').html("");
	  	
	  		for(var i=0; i<data.items.length; i++){
	  			var preAppend = "<div class='row result' data-vidID="+data.items[i].id.videoId+">";
	  			$('#results').append(preAppend + "<div class='col-xs-4'><img src=" + data.items[i].snippet.thumbnails.default.url + " /></div><div class='col-xs-8'>" + data.items[i].snippet.title + "</div></div>");
	  		}
	  	}
	  });
	}

	$('#results').on('click', '.result', function(){
		socket.emit("play", $(this).data('vidid'));
	});



	
});