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
	$(document).ready(style);
	$(window).ready(style);
	$(window).resize(style);
	$("#hideAll").fadeTo(400,0, function(){
		document.getElementById("hideAll").style.display = "none";	
	});	
});

$( "#targetSpec" ).click(function() {
	document.getElementById("specContainer").style.display = "block";
  	document.getElementById("closeIcon").style.display = "block";
	$("#specContainer").fadeTo(400,1);
	$("#closeIcon").fadeTo(400,1);
	/*Style for container with specifications*/
	var containerHeight = $("#specContainer").height();
	var itemHeight = $("#imgSpec").height();
	var tempDiff = Math.round(containerHeight/2-itemHeight/2);
	if (tempDiff > 0){
		$('#imgSpec').css("margin-top",tempDiff);
	}else{
		$('#imgSpec').css("height",itemHeight+2*tempDiff-itemHeight*.05);
		$('#imgSpec').css("margin-top",itemHeight*.025);
		var itemWidth = $("#imgSpec").width();
		$('#imgSpec').css("width",itemWidth+2*tempDiff-itemHeight*.05);
	}
});


$( "#closeIcon").click(function() {	
	$("#closeIcon").fadeTo(400,0, function(){
		document.getElementById("closeIcon").style.display = "none";		
	});
	$("#specContainer").fadeTo(400,0, function(){
		document.getElementById("specContainer").style.display = "none";		
	});	
});

$(document).keyup(function(e) {
	if (e.keyCode == 27){ 
		$("#closeIcon").fadeTo(400,0, function(){
			document.getElementById("closeIcon").style.display = "none";		
		});
		$("#specContainer").fadeTo(400,0, function(){
			document.getElementById("specContainer").style.display = "none";		
		});	
	}
});