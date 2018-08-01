$(function(){
	$(".temp_A").click(function(){
		$(this).parent().toggleClass("showArticle");
		// var index = $(this).css("grid-area","auto / auto / span 2 / span 2");
		// console.log(index);

		$(this).next().find(".comment").append("<input>").find("input").attr("type","password");
		// $(this).next().find(".comment").find("input").attr("type","password");
	});
});