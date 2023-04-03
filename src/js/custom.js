$(function () {
    // animation scroll js
    var html_body = $('html, body');
    $('.nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(0) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 170
                }, 1200);
                return false;
            }
        }
    });

    // wow js activation code//
    new WOW().init();
});