$(document).ready(function(){
	$("#gal1").click(function(){
	    $("#gal1").animate({right: '125px'},1000);
	});
	$("#gal2").click(function(){
	    $("#gal2").animate({left: '375px'},2000);
	});
	$("#gal3").click(function(){
	    $("#gal3").animate({right: '300px'},3000);
	});
	$("#gal4").click(function(){
	    $("#gal4").animate({right: '150px'},4000);
	});
	$("#gal5").click(function(){
	    $("#gal5").animate({right: '250px',
	        opacity: '0.8',
	        height: '150px',
	        width: '150px'},1500);
	});
	$("#gal6").click(function(){
	    $("#gal6").animate({top: '250px',
	        opacity: '0.6',
	        height: '150px',
	        width: '150px'},2000);
	});
	$("#gal7").click(function(){
	    $("#gal7").animate({bottom: '250px',
	        opacity: '0.4',
	        height: '150px',
	        width: '150px'},1500);
	});
	$("#gal8").click(function(){
	    $("#gal8").animate({left: '250px',
	        opacity: '0.2',
	        height: '150px',
	        width: '150px'},3000);
	});
	$("#gal9").click(function(){
	    $("#gal9").animate({right: '150px'},2500);
	    $("#gal9").animate({width: '50px', opacity: '0.8'}, "slow");
	    $("#gal9").animate({height: '10px', opacity: '0.4'}, "slow");
	});
	$("#gal10").click(function(){
	    $("#gal10").animate({right: '200px'}, "slow");
	    $("#gal10").animate({bottom: '100px'}, "slow");
	    $("#gal10").animate({left: '25px'}, "slow");
	    $("#gal10").animate({top: '20px'}, "slow");
	});
	$("#gal11").click(function(){
	    $("#gal11").animate({height: '50px', opacity: '0.4'}, "slow");
		$("#gal11").animate({width: '50px', opacity: '0.8'}, "slow");
	});
	$("#gal12").click(function(){
	    $("#gal12").animate({left: '100px'}, "fast");
	    $("#gal12").animate({bottom: '100px'}, 1500);
	    $("#gal12").animate({top: '20px'}, "slow");
	});
});