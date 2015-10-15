$(document).ready(function(){
	$(window).on('scroll', function(){
  
	  var currentTop =   $(document).scrollTop();
	  var headerHeight = $('.header').height();
	  if(currentTop >= headerHeight) {
	//    $('.inside-pages-nav-bar').show();
	    $('.inside-pages-nav-bar').slideDown()
	  } else {
	  // $('.inside-pages-nav-bar').hide();
	    $('.inside-pages-nav-bar').slideUp()
	  }
	});
});
