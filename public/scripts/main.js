$(document).ready(function(){

	var socket = io();

	var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;

	function onYouTubeIframeAPIReady() {
	  player = new YT.Player('player', {
	    height: '390',
	    width: '640',
	    videoId: 'M7lc1UVf-VE',
	    events: {
	      'onReady': onPlayerReady,
	      'onStateChange': onPlayerStateChange
	    }
	  });
	}

	function onReady(){}

	function onStateChange(){}


	socket.on('play', function(data){
        player.loadVideoById(data, 5, "large");
	});

	// // 2. This code loads the IFrame Player API code asynchronously.
 //        var tag = document.createElement('script');
 
 //        tag.src = "https://www.youtube.com/iframe_api";
 //        var firstScriptTag = document.getElementsByTagName('script')[0];
 //        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
 //        // 3. This function creates an <iframe> (and YouTube player)
 //        //    after the API code downloads.
 //        var player;
 
 //        function onYouTubeIframeAPIReady() {
 //            player = new YT.Player('player', {
 //                height: $(document).height(),
 //                width: $(document).width(),
 //                videoId: 'KkOxeKA2WNE',
 //                events: {
 //                    'onReady': onPlayerReady
 //                }
 //            });
 //        }
 
 
 //        // 4. The API will call this function when the video player is ready.
 //        function onPlayerReady(event) {
 //            event.target.playVideo();
 //        }


	
});