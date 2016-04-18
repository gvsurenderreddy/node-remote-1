$(document).ready(function(){

	var socket = io();

	$('#testButton').on('click', function(){
		//socket.emit("test", "testerino");
		$.post('http://localhost:3000/ytsearch', {"vidTerm":"12345"}, function(data){
			if(data){
				//alert(JSON.stringify(data));
				alert(data.items[0].snippet.title);
				alert(data.items[1].snippet.title);
			}else{
				alert("no data");
			}
		});
	});

	socket.on('number', function(data){
		console.log(data);
	});

	




	
});