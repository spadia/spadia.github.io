leadership = 1;
var id;
$("#dummyDiv1").mouseover(function(){
	id = 1;
	var factor = $("#leaderContainer"+id).width()/337;
	var tempMargin = 8*factor;
	$("#name"+id).css("margin-bottom",tempMargin);
	$("#name"+id).css("font-size",25*factor);
	$("#blueDivText"+id).css("font-size",22*factor);
	var containerHeight = $('#leaderContainer'+id).height();
	var itemHeight = $('#name'+id).height()+$("#nameDesc"+id).height()+tempMargin;
	$('#leaderDiv'+id).css({"transition": "all 0.2s ease-in-out","-webkit-transition": "all 0.2s ease-in-out;"});
	$('#leaderDiv'+id).css("height", Math.round(itemHeight));
	$('#leaderDiv'+id).css("margin-top",containerHeight-itemHeight);
	document.getElementById("nameDesc"+id).style.display = "block";
	setTimeout(function(){
		$("#nameDesc"+id).css("opacity",1);
	},200);
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
	$("#nameDesc"+id).css("opacity",0);
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
	$("#blueDivText"+id).css("font-size",22*factor);
	var containerHeight = $('#leaderContainer'+id).height();
	var itemHeight = $('#name'+id).height()+$("#nameDesc"+id).height()+tempMargin;
	$('#leaderDiv'+id).css({"transition": "all 0.2s ease-in-out","-webkit-transition": "all 0.2s ease-in-out;"});
	$('#leaderDiv'+id).css("height", Math.round(itemHeight));
	$('#leaderDiv'+id).css("margin-top",containerHeight-itemHeight);
	document.getElementById("nameDesc"+id).style.display = "block";
	setTimeout(function(){
		$("#nameDesc"+id).css("opacity",1);
	},200);
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
	$("#nameDesc"+id).css("opacity",0);
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
	$("#blueDivText"+id).css("font-size",22*factor);
	var containerHeight = $('#leaderContainer'+id).height();
	var itemHeight = $('#name'+id).height()+$("#nameDesc"+id).height()+tempMargin;
	$('#leaderDiv'+id).css({"transition": "all 0.2s ease-in-out","-webkit-transition": "all 0.2s ease-in-out;"});
	$('#leaderDiv'+id).css("height", Math.round(itemHeight));
	$('#leaderDiv'+id).css("margin-top",containerHeight-itemHeight);
	document.getElementById("nameDesc"+id).style.display = "block";
	setTimeout(function(){
		$("#nameDesc"+id).css("opacity",1);
	},200);
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
	$("#nameDesc"+id).css("opacity",0);
	$('#blueDiv'+id).css("height",0);
	$('#blueDiv'+id).css("opacity",0);
	$("#blueDivText"+id).css("margin-top",0);
	$("#blueDivText"+id).css("font-size",0);
});

var base, pos1, pos2, pos3, state, place;

$("#dummyDiv1").click(function(){
	document.getElementById("invisible").style.display = "block";
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
		$("#leaderContainer1").animate({left: place}, 500);
		$("#leaderContainer2").animate({left: place}, 500);
		$("#leaderContainer3").animate({left: -2*place}, 500, function(){
			$("#leaderDesc2").animate({height: 0},500,function(){
				document.getElementById("arrowUp").style.display = "block";
				document.getElementById("leaderDesc2").style.display = "none";
				document.getElementById("leaderDesc3").style.display = "none";
				document.getElementById("leaderDesc1").style.display = "block";
				$("#leaderDesc1").animate({height: $("#textDesc1").height()},500);
			});
			$("#leaderDesc3").animate({height: 0},500);
		});
	};
	state = 1;
	setTimeout(function(){
		document.getElementById("invisible").style.display = "none";
	},1000);
});


$("#dummyDiv2").click(function(){
	document.getElementById("invisible").style.display = "block";
	if (state != 2){
		$("#leaderContainer1").animate({left: 0}, 500);
		$("#leaderContainer2").animate({left: 0}, 500);
		$("#leaderContainer3").animate({left: 0}, 500, function(){
			$("#leaderDesc1").animate({height: 0},500,function(){
				document.getElementById("arrowUp").style.display = "block";
				document.getElementById("leaderDesc1").style.display = "none";
				document.getElementById("leaderDesc3").style.display = "none";
				document.getElementById("leaderDesc2").style.display = "block";
				$("#leaderDesc2").animate({height: $("#textDesc2").height()},500);
			});	
			$("#leaderDesc3").animate({height: 0},500);		
		});
	};
	state = 2;
	setTimeout(function(){
		document.getElementById("invisible").style.display = "none";
	},1000);
});

$("#dummyDiv3").click(function(){
	document.getElementById("invisible").style.display = "block";
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
		$("#leaderContainer1").animate({left: 2*place}, 500);
		$("#leaderContainer2").animate({left: -place}, 500);
		$("#leaderContainer3").animate({left: -place}, 500, function(){
			$("#leaderDesc1").animate({height: 0},500,function(){
				document.getElementById("arrowUp").style.display = "block";
				document.getElementById("leaderDesc1").style.display = "none";
				document.getElementById("leaderDesc2").style.display = "none";
				document.getElementById("leaderDesc3").style.display = "block";
				$("#leaderDesc3").animate({height: $("#textDesc3").height()},500);
			});	
			$("#leaderDesc2").animate({height: 0},500);		
		});
	};
	state = 3;
	setTimeout(function(){
		document.getElementById("invisible").style.display = "none";
	},1000);
});