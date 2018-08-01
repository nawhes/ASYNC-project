$(function(){
	$(".temp_A").click(function(){
		$(this).parent().toggleClass("showArticle");
		// var index = $(this).css("grid-area","auto / auto / span 2 / span 2");
		// console.log(index);

		// $(this).next().find(".comment").prepend("<input>").find("input").attr("placeholder","What do you think?");
		// $(this).next().find(".comment").find("input").attr("type","password");
	});

	$(".feed").css("grid-row", function(){
		var feedgrid = "auto / ";
		console.log(feedgrid);
		var feedheight = $(this).find("img").height();
		console.log(feedheight);
		if (feedheight >= 200) {
			 feedgrid += "span 2";
		}

		return feedgrid;
	});
});