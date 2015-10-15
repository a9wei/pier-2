$(document).ready(function(){
    var width = $(window).width();
    $( window ).resize(function(e) {
        e.preventDefault();
        w = $(window).width();
        if (w > 1080){
            $('#mobile-menu').css('display', 'block');
        } else {
            $('#mobile-menu').css('display', 'none');
        };
    });

    $hambergur = $('.navbar-toggle');
    $hambergur.on('click', function(){
        
        //$('.nav-header').toggleClass('active');
        
        if ($('.search-area').hasClass('active') == true) {
            $('.search-area').removeClass('active');
        }
        $('#mobile-menu').slideToggle();
    });
    $circle_search = $('.search-btn');
    $circle_search.on('click', function(){
        $('#mobile-menu').hide();
        $('.search-area').toggleClass('active');
    });

});

