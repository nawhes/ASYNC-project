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
	}

	function notInterested(targetElement){
		//set infomation about notInterested
		targetElement.remove();
	}

	scale();
	$(window).resize(function(){
		scale();
	});

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

	$(".notInterested").click(function(){
		notInterested($(this).parent().parent());
	})

	$(".feedhead").click(function(){
		if ($(this).parent().hasClass("twitch") || $(this).parent().hasClass("youtube")) {
			$(this).parent().toggleClass("showVideo").toggleClass("unshowArticle");
			var width = $(this).width();
			var height = $(this).next().height();
			height = height - width * 0.5625;
			$(this).next().find(".subContent").css("height",height);
			$(this).next().find(".subContent").slideToggle("fast");
			return;
		}
		$(this).parent().toggleClass("showArticle").toggleClass("unshowArticle");
		$(this).next().find(".subContent").slideToggle("fast");

	});

	$(".feed").addClass("unshowArticle");

	$(".subContent").hide();

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

	$("#cloud").click(function() {
		$(".story").slideToggle("fast");
	});

});