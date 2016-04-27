$(document).ready(function(){


	var url = window.location.href;
	url = url.substr(0, url.length-7) + '/ytsearch';

	var socket = io();


	//search after user is done typing
	var typingTimer;                
	var doneTypingInterval = 1500;  
	var $input = $('#ytSearch');

	$input.on('keydown', function () {
	  clearTimeout(typingTimer);
	  typingTimer = setTimeout(doneTyping, doneTypingInterval);
	});

	function doneTyping () {
	  var searchTerm = $input.val();
	  $.post(url, {"vidTerm":searchTerm}, function(data){
	  	if(data){
	  		//clear prior search
	  		$('#results').html("");
	  		
	  		for(let i=0; i<data.items.length; i++){
	  			let preAppend = "<div class='row result' data-vidID="+data.items[i].id.videoId+">";
	  			$('#results').append(preAppend + "<div class='col-xs-4'><img src=" + data.items[i].snippet.thumbnails.default.url + " /></div><div class='col-xs-8'>" + data.items[i].snippet.title + "</div></div>");
	  		}
	  	}
	  });
	}

	$('#results').on('click', '.result', function(){
		socket.emit("play", $(this).data('vidid'));
	});



	
});