$(document).ready(function(){

  //alert('2');
  var news = {};
  news.item = $('.news-item');
  news.item.hovertitle = news.item.find('.news-area');
  news.item.cancelBtn = news.item.find('.news-close-btn');

  news.item.hovertitle.each(function(){
    $(this).on('click', function(){
      
      $('.news-item').each(function(){
         $(this).find('.news-content-article').slideUp();
         $(this).removeClass('open');
         $(this).find('.news-pic').removeClass('close');
      });
      
      //$(this).toggleClass('open');
      var thisItem = $(this).parent();
      thisItem.addClass('open');
      thisItem.find('.news-pic').addClass('close');
      thisItem.find('.news-content-article').slideDown();

    });
  });

  news.item.cancelBtn.each(function(){
    $(this).on('click', function(){
      var thisItem = $(this).parent();
      thisItem.removeClass('open');
      thisItem.find('.news-pic').removeClass('close');
      thisItem.find('.news-content-article').slideUp();
    });
  });

})