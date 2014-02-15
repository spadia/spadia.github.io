var id;
$("#dummyDiv1").mouseover(function(){
	id = 1;
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

$("#dummyDiv1").mouseout(function(){
	id = 1;
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

$("#dummyDiv2").mouseover(function(){
	id = 2;
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

$("#dummyDiv2").mouseout(function(){
	id = 2;
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

$("#dummyDiv3").mouseover(function(){
	id = 3;
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

$("#dummyDiv3").mouseout(function(){
	id = 3;
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

var base, pos1, pos2, pos3, state, place;
	$('#leaderContainer1').css({"transition": "left 0.5s ease-in-out","-webkit-transition": "left 0.5s ease-in-out"});
	$('#leaderContainer2').css({"transition": "left 0.5s ease-in-out","-webkit-transition": "left 0.5s ease-in-out"});
	$('#leaderContainer3').css({"transition": "left 0.5s ease-in-out","-webkit-transition": "left 0.5s ease-in-out"});

$("#dummyDiv1").click(function(){
	if (state != 1){
		switch(state){
			case 2:
				place = $("#leaderContainer2").position().left-$("#leaderContainer1").position().left;
			  break;
			case 3:
				place = $("#leaderContainer3").position().left-$("#leaderContainer2").position().left;
			  break;
			default:
				place = $("#leaderContainer2").position().left-$("#leaderContainer1").position().left;
		};
		$("#leaderContainer1").css('left',place);
		$("#leaderContainer2").css('left',place);
		$("#leaderContainer3").css('left',-2*place);
	};
	state = 1;
});


$("#dummyDiv2").click(function(){
	if (state != 2){
		switch(state){
			case 1:
				place = $("#leaderContainer1").position().left-$("#leaderContainer3").position().left;
			  break;
			case 3:
				place = $("#leaderContainer3").position().left-$("#leaderContainer2").position().left;
			  break;
			default:
				place = $("#leaderContainer2").position().left-$("#leaderContainer1").position().left;
		};
		$("#leaderContainer1").css('left',"auto");
		$("#leaderContainer2").css('left',"auto");
		$("#leaderContainer3").css('left',"auto");
	};
	state = 2;
});

$("#dummyDiv3").click(function(){
	if (state != 3){
		switch(state){
			case 1:
				place = $("#leaderContainer2").position().left-$("#leaderContainer1").position().left;
			  break;
			case 2:
				place = $("#leaderContainer2").position().left-$("#leaderContainer1").position().left;
			  break;
			default:			
				place = $("#leaderContainer2").position().left-$("#leaderContainer1").position().left;
		};
		$("#leaderContainer1").css('left',2*place);
		$("#leaderContainer2").css('left',-place);
		$("#leaderContainer3").css('left',-place);
	};
	state = 3;
});
