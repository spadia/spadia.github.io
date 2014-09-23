/********JQuery*********/
/*************Display div when images are not loaded*******************/

function style(){	
	/*Style for logo in main container*/
	var containerHeight = $("#mainContainerLogo").height();
	var itemHeight = $("#logoHD").height();
	$('#logoHD').css("margin-top",Math.round(containerHeight/2-itemHeight/2));
	/*Style for containers in home page*/
	//First container
	containerHeight = $("#mainContainer1").height();
	itemHeight = $("#mainText1").height();
	$('#mainText1').css("margin-top",Math.round(containerHeight/2-itemHeight/2));
	//Second container
	containerHeight = $("#mainContainer2").height();
	itemHeight = $("#mainText2").height();
	$('#mainText2').css("margin-top",Math.round(containerHeight/7.6));
	itemHeight = Math.round(containerHeight/1.9);
	$('#targetSpec').css({'height':itemHeight,'margin-top':Math.round(itemHeight/2)});
	//font size in second container
	var targetDiv = document.getElementById("p1Click");
	$(targetDiv).css('font-size',Math.round(containerHeight*3/76));
	//Third container
	containerHeight = $("#mainContainer3").height();
	itemHeight = $("#mainText3").height();
	$('#mainText3').css("margin-top",Math.round(containerHeight/2-itemHeight/2));
	/*Style for containers in sections*/
	//First container
	containerHeight = $("#sectionContainer1").height();
	itemHeight = $("#sectionText1").height();
	$('#sectionText1').css("margin-top",Math.round(containerHeight/2-itemHeight/2));
	var tempDiff = containerHeight - itemHeight;
	if (tempDiff < 0){
		tempDiff = Math.round(Math.abs(tempDiff));
		$("#sectionContainer1").css("margin-top",tempDiff);
		$("#sectionContainer1").css("margin-bottom",tempDiff);
	}else{
		$("#sectionContainer1").css("margin-top",0);
		$("#sectionContainer1").css("margin-bottom",0);
	};
	//Second container
	containerHeight = $("#sectionContainer2").height();
	itemHeight = $("#sectionText2").height();
	$('#sectionText2').css("margin-top",Math.round(containerHeight/2-itemHeight/2));
	tempDiff = containerHeight - itemHeight;
	if (tempDiff < 0){
		tempDiff = Math.round(Math.abs(tempDiff));
		$("#sectionContainer2").css("margin-top",tempDiff);
		$("#sectionContainer2").css("margin-bottom",tempDiff);
	}else{
		$("#sectionContainer2").css("margin-top",0);
		$("#sectionContainer2").css("margin-bottom",0);
	};
	//Third container
	containerHeight = $("#sectionContainer3").height();
	itemHeight = $("#sectionText3").height();
	$('#sectionText3').css("margin-top",Math.round(containerHeight/2-itemHeight/2));
	tempDiff = containerHeight - itemHeight;
	if (tempDiff < 0){
		tempDiff = Math.round(Math.abs(tempDiff));
		$("#sectionContainer3").css("margin-top",tempDiff);
		$("#sectionContainer3").css("margin-bottom",tempDiff);
	}else{
		$("#sectionContainer3").css("margin-top",0);
		$("#sectionContainer3").css("margin-bottom",0);
	};
	/*Style for video containers*/
	containerWidth = $("#videoContainer1").width();
	$('#videoContainer1').css("height",containerWidth*3/4);
	containerWidth = $("#videoContainer2").width();
	$('#videoContainer2').css("height",containerWidth*3/4);
	containerWidth = $("#videoContainer3").width();
	$('#videoContainer3').css("height",containerWidth*3/4);
	containerWidth = $("#videoContainer4").width();
	$('#videoContainer4').css("height",containerWidth*3/4);
	//Style for video container and text 1
	containerHeight = $("#videoContainer1").height();
	itemHeight = $('#videoText1').height();
	tempDiff = containerHeight - itemHeight;
	if(tempDiff > 0){
		$('#mainVideo1').css("height",containerHeight);	
		$('#videoText1').css("margin-top",Math.round(tempDiff/2));
		$('#videoContainer1').css("margin-top",0);
	}else{
		$('#mainVideo1').css("height",itemHeight);
		$('#videoContainer1').css("margin-top",Math.round(-tempDiff/2));
		$('#videoText1').css("margin-top",0);
	}
	//Style for video container and text 2
	containerHeight = $("#videoContainer2").height();
	itemHeight = $('#videoText2').height();
	tempDiff = containerHeight - itemHeight;
	if(tempDiff > 0){
		$('#mainVideo2').css("height",containerHeight);	
		$('#videoText2').css("margin-top",Math.round(tempDiff/2));
		$('#videoContainer2').css("margin-top",0);
	}else{
		$('#mainVideo2').css("height",itemHeight);
		$('#videoContainer2').css("margin-top",Math.round(-tempDiff/2));
		$('#videoText2').css("margin-top",0);
	}
	//Style for video container and text 3
	containerHeight = $("#videoContainer3").height();
	itemHeight = $('#videoText3').height();
	tempDiff = containerHeight - itemHeight;
	if(tempDiff > 0){
		$('#mainVideo3').css("height",containerHeight);	
		$('#videoText3').css("margin-top",Math.round(tempDiff/2));
		$('#videoContainer3').css("margin-top",0);
	}else{
		$('#mainVideo3').css("height",itemHeight);
		$('#videoContainer3').css("margin-top",Math.round(-tempDiff/2));
		$('#videoText3').css("margin-top",0);
	}
	//Style for video container and text 4
	containerHeight = $("#videoContainer4").height();
	itemHeight = $('#videoText4').height();
	tempDiff = containerHeight - itemHeight;
	if(tempDiff > 0){
		$('#mainVideo4').css("height",containerHeight);	
		$('#videoText4').css("margin-top",Math.round(tempDiff/2));
		$('#videoContainer4').css("margin-top",0);
	}else{
		$('#mainVideo4').css("height",itemHeight);
		$('#videoContainer4').css("margin-top",Math.round(-tempDiff/2));
		$('#videoText4').css("margin-top",0);
	}
	/*Style for slider*/
	//Main container
	containerWidth = $('.slides').width();
	$('.slides').css("height",containerWidth*9/16);
	//height for prev and next buttons
	containerHeight = $('#prev1').height();
	tempDiff = Math.round((containerWidth*9/16 - containerHeight)/2);
	$('#prev1').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	$('#next1').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	$('#prev2').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	$('#next2').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	$('#prev3').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	$('#next3').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	$('#prev4').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	$('#next4').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	$('#prev5').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	$('#next5').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	$('#prev6').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	$('#next6').css({'padding-top':tempDiff, 'padding-bottom':tempDiff});
	/*STYLE FOR LEADERSHIP*/
	//FIRST CONTAINER
	containerWidth = $('#mainLeaderContainer').width();
	factor = containerWidth/1351;
	$('#mainLeaderContainer').css("margin-top",150*factor);
	$('#footerLeader').css("margin-top",150*factor);
	$('#leaderContainer1').css({"transition": "none","-webkit-transition": "none"});
	containerWidth = $('#leaderContainer1').width();
	$('#leaderContainer1').css("height",containerWidth);
	$('#leaderSpan1').css("height",containerWidth);
	$("#dummyDiv1").css("height",containerWidth);
	containerHeight = $("#name1").height();
	$('#leaderDiv1').css({"height": containerHeight,"margin-top":containerWidth-containerHeight});
	//Text inside first container
	factor = containerWidth/337;
	$("#name1").css("font-size",25*factor);
	$("#nameDesc1").css("font-size",17*factor);
	//SECOND CONTAINER
	$('#leaderContainer2').css({"transition": "none","-webkit-transition": "none"});
	containerWidth = $('#leaderContainer2').width();
	$('#leaderContainer2').css("height",containerWidth);
	$('#leaderSpan2').css("height",containerWidth);
	$("#dummyDiv2").css("height",containerWidth);
	containerHeight = $("#name2").height();
	$('#leaderDiv2').css({"height": containerHeight,"margin-top":containerWidth-containerHeight});
	//Text inside first container
	factor = containerWidth/337;
	$("#name2").css("font-size",25*factor);
	$("#nameDesc2").css("font-size",17*factor);
	//THIRD CONTAINER
	$('#leaderContainer3').css({"transition": "none","-webkit-transition": "none"});
	containerWidth = $('#leaderContainer3').width();
	$('#leaderContainer3').css("height",containerWidth);
	$('#leaderSpan3').css("height",containerWidth);
	$("#dummyDiv3").css("height",containerWidth);
	containerHeight = $("#name3").height();
	$('#leaderDiv3').css({"height": containerHeight,"margin-top":containerWidth-containerHeight});
	//Text inside first container
	factor = containerWidth/337;
	$("#name3").css("font-size",25*factor);
	$("#nameDesc3").css("font-size",15*factor);
	// protect containers of animations
	$("#leaderContainer1").css('left','auto');
	$("#leaderContainer2").css('left','auto');
	$("#leaderContainer3").css('left','auto');	
	state = 0;
	if (leadership == 1){
		//FIRST CONTAINER WITH DESCRIPTION OF LEADERSHIP
		containerWidth = $("#mainLeaderContainer").width();
		factor = 1351/containerWidth;
		$("#leaderDesc1").css("width",1160/factor);
		$("#leaderDesc1").css("margin-left",(containerWidth-(1160/factor))/2);
		$("#leaderDesc1").css("height", 0);
		//SECOND CONTAINER WITH DESCRIPTION OF LEADERSHIP
		$("#leaderDesc2").css("width",1160/factor);
		$("#leaderDesc2").css("margin-left",(containerWidth-(1160/factor))/2);
		$("#leaderDesc2").css("height", 0);
		//THIRD CONTAINER WITH DESCRIPTION OF LEADERSHIP
		$("#leaderDesc3").css("width",1160/factor);
		$("#leaderDesc3").css("margin-left",(containerWidth-(1160/factor))/2);
		$("#leaderDesc3").css("height", 0);
		document.getElementById("leaderDesc1").style.display = "none";
		document.getElementById("leaderDesc2").style.display = "none";
		document.getElementById("leaderDesc3").style.display = "none";
		document.getElementById("arrowUp").style.display = "none";
		$("#textDesc1").css("font-size",20/factor);	
		$("#textDesc2").css("font-size",20/factor);	
		$("#textDesc3").css("font-size",20/factor);
		$("#textDesc1").css({"padding-left": 40/factor, "padding-right": 40/factor});	
		$("#textDesc2").css({"padding-left": 40/factor, "padding-right": 40/factor});	
		$("#textDesc3").css({"padding-left": 40/factor, "padding-right": 40/factor});	
	}

		/*Style for container with specifications*/
		var containerHeight = $("#specContainer").height();
		var itemHeight = $("#imgSpec").height();
		var tempDiff = Math.round(containerHeight/2-itemHeight/2);
		$('#imgSpec').css("margin-top",tempDiff);
		$('#imgSpec').css("width",$("#specContainer").width()*0.9);
		$('#imgSpec').css("height",$("#specContainer").width()*9*0.9/16);
		//Container with specifications text
		var containerWidth = $("#specContainer").width();
		var factor = containerWidth/1351;
		$("#specText").css("font-size",19*factor);
		$("#specText").css("margin-left",10*factor);
		$("#specText").css("width",300*factor);
		containerHeight = $("#specContainer").height();
		itemHeight = $("#specText").height();
		factor = containerHeight/705;
		$("#specText").css("margin-top",(containerHeight-itemHeight)/2+6*factor);

};
$(window).load(function(){  
	$(document).ready(style);
	$(window).ready(style);
	$(window).resize(style);
	$("#hideAll").fadeTo(400,0, function(){
		document.getElementById("hideAll").style.display = "none";	
	});	
});
var leadership;
//$(window).resize(style);
 var resizeTimer;
//Event to handle resizing
$(window).resize(function () 
{	
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(style, 400);
});


$( "#targetSpec" ).click(function() {
  	document.getElementById("backgdSpecClick").style.display = "block";
  	$("#mainText2").fadeTo(800,0);
	$("#backgdSpecClick").fadeTo(800,1,function(){
		document.getElementById("specContainer").style.display = "block";
	  	document.getElementById("closeIcon").style.display = "block";
		$("#specContainer").fadeTo(400,1);
		$("#closeIcon").fadeTo(400,1);


		/*Style for container with specifications*/
		var containerHeight = $("#specContainer").height();
		var itemHeight = $("#imgSpec").height();
		var tempDiff = Math.round(containerHeight/2-itemHeight/2);
		$('#imgSpec').css("margin-top",tempDiff);
		$('#imgSpec').css("width",$("#specContainer").width()*0.9);
		$('#imgSpec').css("height",$("#specContainer").width()*9*0.9/16);
		//Container with specifications text
		var containerWidth = $("#specContainer").width();
		var factor = containerWidth/1351;
		$("#specText").css("font-size",19*factor);;
		$("#specText").css("margin-left",10*factor);
		$("#specText").css("width",300*factor);
		containerHeight = $("#specContainer").height();
		itemHeight = $("#specText").height();
		factor = containerHeight/705;
		$("#specText").css("margin-top",(containerHeight-itemHeight)/2+6*factor);


	});
});


$( "#closeIcon").click(function() {	
  	$("#mainText2").fadeTo(200,1);
	$("#closeIcon").fadeTo(400,0, function(){
		document.getElementById("closeIcon").style.display = "none";		
	});
	$("#specContainer").fadeTo(400,0, function(){
		document.getElementById("specContainer").style.display = "none";		
	});	
	$("#backgdSpecClick").fadeTo(400,0, function(){
		document.getElementById("specContainer").style.display = "none";		
	});
});

$(document).keyup(function(e) {
	if (e.keyCode == 27){ 
  		$("#mainText2").fadeTo(200,1);
		$("#closeIcon").fadeTo(400,0, function(){
			document.getElementById("closeIcon").style.display = "none";		
		});
		$("#specContainer").fadeTo(400,0, function(){
			document.getElementById("specContainer").style.display = "none";		
		});	
		$("#backgdSpecClick").fadeTo(400,0, function(){
			document.getElementById("specContainer").style.display = "none";		
		});
	}
});

var fadeElement  = $("#backgdSpec");	
$("#targetSpec").mouseover(function(){
	document.getElementById("backgdSpec").style.display = "block";
	fadeElement.fadeTo(400,1);
});

$("#targetSpec").mouseout(function(){
	fadeElement.stop().fadeTo(200,0,function(){
		document.getElementById("backgdSpec").style.display = "none";		
	});
});

$("#facebook").mouseover(function(){
	$("#facebook").fadeTo(200,1);
});
$("#facebook").mouseout(function(){
	$("#facebook").stop().fadeTo(200,0);
});
$("#youtube").mouseover(function(){
	$("#youtube").fadeTo(200,1);
});
$("#youtube").mouseout(function(){
	$("#youtube").stop().fadeTo(200,0);
});
$("#linkedin").mouseover(function(){
	$("#linkedin").fadeTo(200,1);
});
$("#linkedin").mouseout(function(){
	$("#linkedin").stop().fadeTo(200,0);
});
$("#twitter").mouseover(function(){
	$("#twitter").fadeTo(200,1);
});
$("#twitter").mouseout(function(){
	$("#twitter").stop().fadeTo(200,0);
});

window.setInterval(event, 5000);
var idIntro = 1;

function event() {
	idIntro++;
	switch(idIntro){
		case 1:
			$("#intro41").stop().fadeTo(200,0);
			$("#intro11").fadeTo(200,1);
			$("#textIntro4").stop().fadeTo(200,0);
			$("#textIntro1").fadeTo(200,1);
			break;
		case 2:
			$("#intro11").stop().fadeTo(200,0);
			$("#intro21").fadeTo(200,1);
			$("#textIntro1").stop().fadeTo(200,0);
			$("#textIntro2").fadeTo(200,1);
			break;
		case 3:
			$("#intro21").stop().fadeTo(200,0);
			$("#intro31").fadeTo(200,1);
			$("#textIntro2").stop().fadeTo(200,0);
			$("#textIntro3").fadeTo(200,1);
			break;
		case 4:
			$("#intro31").stop().fadeTo(200,0);
			$("#intro41").fadeTo(200,1);
			$("#textIntro3").stop().fadeTo(200,0);
			$("#textIntro4").fadeTo(200,1);
			break;
	}
	if (idIntro >= 4){
		idIntro = 0;
	}
}
/*
$("#intro11").mouseover(function(){
	$("#intro11").fadeTo(200,1);
});
$("#intro11").mouseout(function(){
	$("#intro11").stop().fadeTo(200,0);
});
$("#intro21").mouseover(function(){
	$("#intro21").fadeTo(200,1);
});
$("#intro21").mouseout(function(){
	$("#intro21").stop().fadeTo(200,0);
});
$("#intro31").mouseover(function(){
	$("#intro31").fadeTo(200,1);
});
$("#intro31").mouseout(function(){
	$("#intro31").stop().fadeTo(200,0);
});
$("#intro41").mouseover(function(){
	$("#intro41").fadeTo(200,1);
});
$("#intro41").mouseout(function(){
	$("#intro41").stop().fadeTo(200,0);
});*/