var id = 1;
$("#dummyDiv"+id).mouseover(function(){
	var factor = $("#leaderContainer"+id).width()/337;
	var tempMargin = 8*factor;
	$("#name"+id).css("margin-bottom",tempMargin);
	$("#name"+id).css("font-size",25*factor);
	$("#blueDivText"+id).css("font-size",25*factor);
	var containerHeight = $('#leaderContainer'+id).height();
	var itemHeight = $('#name'+id).height()+$("#nameDesc"+id).height()+tempMargin;
	$('#leaderDiv'+id).css({"transition": "all 0.2s ease-in-out","-webkit-transition": "all 0.2s ease-in-out;"});
	$('#leaderDiv'+id).css("height", Math.round(itemHeight));
	$('#leaderDiv'+id).css("margin-top",containerHeight-itemHeight);
	document.getElementById("nameDesc"+id).style.display = "block";
	$("#nameDesc"+id).css("opacity",1);
	$('#blueDiv'+id).css("height",containerHeight-itemHeight);
	$('#blueDiv'+id).css("opacity",1);
	$("#blueDivText"+id).css("margin-top",Math.round((containerHeight-itemHeight)/2));
});

$("#dummyDiv"+id).mouseout(function(){
	var containerHeight = $('#leaderContainer'+id).height();
	var itemHeight = $('#name'+id).height();
	$('#leaderDiv'+id).css({"transition": "all 0.2s ease-in-out","-webkit-transition": "all 0.3s ease-in-out;"});
	$('#leaderDiv'+id).css("height", Math.round(itemHeight));	
	$('#leaderDiv'+id).css("margin-top",containerHeight-itemHeight);
	document.getElementById("nameDesc"+id).style.display = "none";
	$('#blueDiv'+id).css("height",0);
	$('#blueDiv'+id).css("opacity",0);
	$("#blueDivText"+id).css("margin-top",0);
	$("#blueDivText"+id).css("font-size",0);
});
