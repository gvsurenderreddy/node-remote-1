$(document).ready(function(){



	$('#testButton').on('click', function(){
		$.post('http://localhost:3000/testemit', {"data":"data"}, function(data){
			if(data){
				alert(data);
			}else{
				alert("no data");
			}
		});
	});



	
});