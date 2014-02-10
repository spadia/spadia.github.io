/********JQuery*********/
/*************Display div when images are not loaded*******************/

function style(){	
	/*Style for logo in main container*/
	var mainContainerHeightLogo = $("#mainContainerLogo").height();
	var logoHeight = $("#logoHD").height();
	$('#logoHD').css("margin-top",Math.round(mainContainerHeightLogo/2-logoHeight/2));
	/*Style for containers*/
	//First container
	var mainContainerHeight1 = $("#mainContainer1").height();
	var mainTextHeight1 = $("#mainText1").height();
	$('#mainText1').css("margin-top",Math.round(mainContainerHeight1/2-mainTextHeight1/2));
	//Second container
	var mainContainerHeight2 = $("#mainContainer2").height();
	var mainTextHeight2 = $("#mainText2").height();
	$('#mainText2').css("margin-top",Math.round(mainContainerHeight2/2-mainTextHeight2/2));
	//Third container
	var mainContainerHeight3 = $("#mainContainer3").height();
	var mainTextHeight3 = $("#mainText3").height();
	$('#mainText3').css("margin-top",Math.round(mainContainerHeight3/2-mainTextHeight3/2));
}

$(window).load(function(){  
	document.getElementById("hideAll").style.display = "none";
	$(document).ready(style);
	$(window).ready(style);
	$(window).resize(style);
});