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
	var tempDiff = containerHeight - itemHeight;
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
	var tempDiff = containerHeight - itemHeight;
	if (tempDiff < 0){
		tempDiff = Math.round(Math.abs(tempDiff));
		$("#sectionContainer3").css("margin-top",tempDiff);
		$("#sectionContainer3").css("margin-bottom",tempDiff);
	}else{
		$("#sectionContainer3").css("margin-top",0);
		$("#sectionContainer3").css("margin-bottom",0);
	};
	/*Style for video containers*/
	var containerWidth = $("#videoContainer1").width();
	$('#videoContainer1').css("height",containerWidth*3/4);
	var containerWidth = $("#videoContainer2").width();
	$('#videoContainer2').css("height",containerWidth*3/4);
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
	/*STYLE FOR LEADERSHIP*/
	//First container
	$('#leaderDiv1').css({"transition": "none","-webkit-transition": "none"});
	containerWidth = $('#leaderContainer1').width();
	$('#leaderContainer1').css("height",containerWidth);
	$('#leaderSpan1').css("height",containerWidth);
	$("#dummyDiv1").css("height",containerWidth);
	containerHeight = $("#name1").height();
	$('#leaderDiv1').css({"height": containerHeight,"margin-top":containerWidth-containerHeight});
	//Text inside first container
	var factor = $(window).width()/1351;
	$("#name1").css("font-size",25*factor);
	$("#nameDesc1").css("font-size",13*factor);
	//Second container
	$('#leaderContainer2').css("height",containerWidth);
	$('#leaderSpan2').css("height",containerWidth);
	$('#leaderDiv2').css({"height": containerHeight,"margin-top":containerWidth-containerHeight});
	//Third container
	$('#leaderContainer3').css("height",containerWidth);
	$('#leaderSpan3').css("height",containerWidth);
	$('#leaderDiv3').css({"height": containerHeight,"margin-top":containerWidth-containerHeight});
	//Fourth container
	$('#leaderContainer4').css("height",containerWidth);
	$('#leaderSpan4').css("height",containerWidth);
	$('#leaderDiv4').css({"height": containerHeight,"margin-top":containerWidth-containerHeight});
};

$("#dummyDiv1").mouseover(function(){
	var factor = $(window).width()/1351;
	var tempMargin = 8*factor;

	$("#name1").css("margin-bottom",tempMargin);
	$("#name1").css("font-size",25*factor);


	var containerHeight = $('#leaderContainer1').height();
	var itemHeight = $('#name1').height()+$("#nameDesc1").height()+tempMargin;

	$('#leaderDiv1').css({"transition": "all 0.2s ease-in-out","-webkit-transition": "all 0.2s ease-in-out;"});
	
	$('#leaderDiv1').css("height", Math.round(itemHeight));
	$('#leaderDiv1').css("margin-top",containerHeight-itemHeight);

	setTimeout(function(){
		document.getElementById("nameDesc1").style.display = "block";
		$("#nameDesc1").css("opacity",1);
	},200);

	$('#blueDiv1').css("height",containerHeight-itemHeight);
	$('#blueDiv1').css("opacity",1);
});

$("#dummyDiv1").mouseout(function(){
	var containerHeight = $('#leaderContainer1').height();
	var itemHeight = $('#name1').height();
	$('#leaderDiv1').css({"transition": "all 0.2s ease-in-out","-webkit-transition": "all 0.3s ease-in-out;"});
	$('#leaderDiv1').css("height", Math.round(itemHeight));	
	$('#leaderDiv1').css("margin-top",containerHeight-itemHeight);

	document.getElementById("nameDesc1").style.display = "none";

	$('#blueDiv1').css("height",0);
	$('#blueDiv1').css("opacity",0);
});


$(window).load(function(){  
	$(document).ready(style);
	$(window).ready(style);
	$(window).resize(style);
	$("#hideAll").fadeTo(400,0, function(){
		document.getElementById("hideAll").style.display = "none";	
	});	
});

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
		if (tempDiff > 0){
			$('#imgSpec').css("margin-top",tempDiff);
		}else{
			$('#imgSpec').css("height",itemHeight+2*tempDiff-itemHeight*.05);
			$('#imgSpec').css("margin-top",itemHeight*.025);
			var itemWidth = $("#imgSpec").width();
			$('#imgSpec').css("width",itemWidth+2*tempDiff-itemHeight*.05);
		}		
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