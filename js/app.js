$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['home', 'about', 'work', 'contact'],
        keyboardScrolling: false
    });

    $('.fade').slick({
		  dots: true,
		  infinite: true,
		  speed: 700,
		  cssEase: 'linear',
		  arrows : false,
		  autoplay : true,
		  autoplaySpeed : 2000,
		  fade : true
		});

    $(".btn-toggle-menu").click(function(){
    	$(".main-menu").toggleClass("hide-menu");
    })
});


