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
	$('#mainText2').css("margin-top",Math.round(containerHeight/2-itemHeight/2));
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
	};
	//Second container
	containerHeight = $("#sectionContainer2").height();
	itemHeight = $("#sectionText2").height();
	$('#sectionText2').css("margin-top",Math.round(containerHeight/2-itemHeight/2));
	var tempDiff = containerHeight - itemHeight;
	if (tempDiff < 0){
		tempDiff = Math.round(Math.abs(tempDiff));
		$("#sectionContainer2").css("margin-top",tempDiff);
		$("#sectionContainer2").css("margin-bottom",tempDiff);
	};
	//Third container
	containerHeight = $("#sectionContainer3").height();
	itemHeight = $("#sectionText3").height();
	$('#sectionText3').css("margin-top",Math.round(containerHeight/2-itemHeight/2));
	var tempDiff = containerHeight - itemHeight;
	if (tempDiff < 0){
		tempDiff = Math.round(Math.abs(tempDiff));
		$("#sectionContainer3").css("margin-top",tempDiff);
		$("#sectionContainer3").css("margin-bottom",tempDiff);
	};
	
}

$(window).load(function(){  
	document.getElementById("hideAll").style.display = "none";
	$(document).ready(style);
	$(window).ready(style);
	$(window).resize(style);
});

$( "#target" ).click(function() {
  	document.getElementById("target2").style.display = "block";
	document.getElementById("hideAll").style.display = "block";
	var windowHeight = $(window).height();
	var imgHeight = $("#imgLoad").height();
	$("#hideAll").css("padding-top",Math.round(windowHeight/2)-Math.round(imgHeight/2));
});


$( "#target2" ).click(function() {
	document.getElementById("target2").style.display = "none";
	document.getElementById("hideAll").style.display = "none";	
});
