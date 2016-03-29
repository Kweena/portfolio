$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['home', 'about', 'work', 'contact'],
        keyboardScrolling: false
    });
    $('.slider').slick({ dots : true,
    	arrows : false})
    $(".btn-toggle-menu").click(function(){
    	$(".main-menu").toggleClass("hide-menu");
    })
});

