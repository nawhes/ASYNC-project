
$('#scrollreact').ready(function(){
	// console.log("event");
	var position = $('#scrollreact').offset();
	if (position.top < 168) {
		$('#scrollreact').addClass('navalt');
		// $('#scrollreact').css("background-color", "rgba(0,0,0,0)");
	}
	else {
		$('#scrollreact').removeClass('navalt');
		// $('#scrollreact').css("background-color", "rgb(255,255,255)");
	}
	$(window).scroll(function(){
		var position = $('#scrollreact').offset();
		// console.log("scroll");
		if (position.top < 168) {
			$('#scrollreact').addClass('navalt');
			// $('#scrollreact').css("background-color", "rgba(0,0,0,0)");
		}
		else {
			$('#scrollreact').removeClass('navalt');
			// $('#scrollreact').css("background-color", "rgb(255,255,255)");
		}
	});
	
});

$('.menutoggler').on('click',function(){
	$('.togglebar').css('display','block');
});

$('.togglebar').on('click',function(){
	$('.togglebar').css('display','none');
}); 





$('tbody tr:odd').css('background-color','gray');

