$(".slider img").eq(0).fadeIn();
var i = 0;
var t = setInterval(function () {
    i++;
    if (i == 3) {
        i = 0;
        $(".slider img").eq(1).fadeOut();
        $(".slider img").eq(2).fadeOut();
    }

    $(".slider img").eq(i).fadeIn();

}, 3000);


window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;

    var offset = $('.banner').offset().top + 583.88;

    var offset2 = $('.banner').offset().top + 780;
    if (scroll > offset) {

        $('.header').css({ 'position': 'fixed', 'width': '100%' });
        $('.logo').css({ "background": "url(img/mainbar-menu_mu.png) no-repeat", "background-position": "100px 75px" });
        $('.header .nav').css({ "top": "60px" });
    } else {

        $('.header').css({ 'position': 'relative', 'width': '1100px' });
        $('.logo').css({ "background": "url(img/info-img.png) no-repeat", "background-position": "0px -4px" });
    }

}

