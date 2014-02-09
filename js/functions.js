document.getElementById("hideAll").style.display = "block";
var windowHeight = $(window).height();
var imgHeight = $("#imgLoad").height();
$("#hideAll").css("padding-top",Math.round(windowHeight/2)-Math.round(imgHeight/2));
//alert(imgHeight);

$(window).load(function(){  
	document.getElementById("hideAll").style.display = "none"; 
});