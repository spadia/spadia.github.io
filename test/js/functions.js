/********JQuery*********/
/*************Display div when images are not loaded*******************/
document.getElementById("hideAll").style.display = "block";
var windowHeight = $(window).height();
var imgHeight = $("#imgLoad").height();
$("#hideAll").css("padding-top",Math.round(windowHeight/2)-Math.round(imgHeight/2));


function style(){	
	/*Style for logo in main container*/
	var mainContainerHeightLogo = $("#mainContainerLogo").height();
	var logoHeight = $("#logoHD").height();
	$('#logoHD').css("margin-top",Math.round(mainContainerHeightLogo/2-logoHeight/2));
	/*Style for containers*/
	//alert("hola");
	var mainContainerHeight1 = $("#mainContainer1").height();
	var mainTextHeight1 = $("#mainText1").height();
	$('#mainText1').css("margin-top",Math.round(mainContainerHeight1/2-mainTextHeight1/2));
}

$(window).load(function(){  
	document.getElementById("hideAll").style.display = "none";
	//alert("adios");
	$(document).ready(style);
	$(window).ready(style);
	$(window).resize(style);
});