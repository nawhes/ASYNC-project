$(function(){
	
	var rootfontsize = $(":root").css("font-size").replace(/[^-\d\.]/g, '');
	//"/[^-\d\.]/g" is unit character
	var framewidth = $(".frame").width();
	rootfontsize = rootfontsize * 1.0;
	
	if (framewidth >= 1800) {
		feedwidth = framewidth / 5;
	} else if (framewidth >= 1000) {
		feedwidth = framewidth / 4;
	} else if (framewidth >= 800) {
		feedwidth = framewidth / 3;
	} else {
		feedwidth = framewidth / 2;
	}
	feedwidth = feedwidth - rootfontsize * 3 * 2 / 10;
	// framewidth - margin(0.3rem , left and right)
	var feedheight = feedwidth * 0.5625;
	// (feedwidth : feedheight = 16 : 9)

	console.log("frame width = " + framewidth);
	console.log("feed width = " + feedwidth);
	console.log("feed height = " + feedheight);
	console.log(feedheight * 2 + rootfontsize * 4.1 / 10);

	//feedheight
	$(".feed").addClass(function(){
		var kiki = $(this).find(".feedbody").children().first().height();
		if (kiki <= feedheight) {
			return "row1";
		}
		if (kiki <= feedheight * 2 + rootfontsize * 4.1) {
			//when gridrow is span 2 = 2 of feedheight & feedmargin(0.3rem) + feedhead, feedfootter
			return "row2"
		}
		return "row3";
	});


	$(".feedhead").click(function(){
		if ($(this).parent().hasClass("youtube") || $(this).parent().hasClass("twitch")) {
			$(this).parent().toggleClass("showVideo").toggleClass("unshowArticle");
			return;
		}
		// $(this).parent().not(".youtube , .twitch").toggleClass("showArticle").toggleClass("unshowArticle");
	});



	$(".feed").toggleClass("unshowArticle");
});