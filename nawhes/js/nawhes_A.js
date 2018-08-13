$(function(){
	function scale(){
		var rootfontsize = $(":root").css("font-size").replace(/[^-\d\.]/g, '');
		//"/[^-\d\.]/g" is unit character
		var framewidth = $(".frame").width();
		rootfontsize = rootfontsize * 1.0;
		
		if (framewidth >= 1800) {
			$("#scale").attr("href", "css/xlarge.css");
			feedwidth = framewidth / 5;
		} else if (framewidth >= 1000) {
			$("#scale").attr("href", "css/large.css");
			feedwidth = framewidth / 4;
		} else if (framewidth >= 800) {
			$("#scale").attr("href", "css/small.css");
			feedwidth = framewidth / 3;
		} else {
			$("#scale").attr("href", "css/xsmall.css");
			feedwidth = framewidth / 2;
		}
		feedwidth = feedwidth - rootfontsize * 3 * 2 / 10;
		// framewidth - margin(0.3rem , left and right)
		var feedheight = feedwidth * 0.5625;
		// (feedwidth : feedheight = 16 : 9)

		console.log("frame width = " + framewidth);
		console.log("feed width = " + feedwidth);
		console.log("feedbody height = " + feedheight);
		console.log("feed height = " + feedheight * 2 + rootfontsize * 4.1 / 10);
	}

	function notIntereted(targetElement){
		//deep learning
		targetElement.remove();
	}

	$(".feed").addClass(function(){
		var width = $(this).find(".feedbody").find(".coreContent").find("img").width();
		var height = $(this).find(".feedbody").find(".coreContent").find("img").height();
		if (width < height) {
			return "row2";
		} else if (width > height * 2) {
			return "col2";
		}
		return;
	})

	$(".expand").click(function(){
		notIntereted($(this).parent().parent());
	})

	scale();
	$(window).resize(function(){
		scale();
	});

	//feedheight
	// $(".feed").find(".feedhead").addClass(function(){
	// 	if ($(this).parent().hasClass("twitch") || $(this).parent().hasClass("youtube")) {
	// 		return "expand";
	// 	}
	// 	if ($(this).parent().find(".feedbody").children().first().height() > feedheight) {
	// 		return "expand";
	// 	}
	// 	return;
	// });



	$(".feedhead").click(function(){
		if ($(this).parent().hasClass("twitch") || $(this).parent().hasClass("youtube")) {
			$(this).parent().toggleClass("showVideo").toggleClass("unshowArticle");
			return;
		}
		$(this).parent().toggleClass("showArticle").toggleClass("unshowArticle");
	});

	$(".feed").addClass("unshowArticle");

	$(".selectPic").hover(function() {
		$(this).css({"opacity":"1"});
		$(this).siblings().css("opacity","0.3");
	}, function() {
		$(this).css({"opacity":"0"});
		$(this).siblings().css("opacity","1");
	});

	$(".selectPic").find("img").click(function() {
		var swap = $(this).attr("src");
		$(this).attr("src", $(this).parent().parent().siblings().attr("src"));
		$(this).parent().parent().siblings().attr("src",swap);
	});

});