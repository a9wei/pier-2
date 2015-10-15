$(document).ready(function(){

  //alert('2');
  var news = {};
  news.item = $('.qa-list-item');
  news.item.hovertitle = news.item.find('.qa-list-area');
  news.item.cancelBtn = news.item.find('.news-close-btn');

  news.item.hovertitle.each(function(){
    $(this).on('click', function(){
      
      $('.qa-list-item').each(function(){
         $(this).find('.qa-content-article').slideUp();
         $(this).removeClass('open');
         $(this).find('.qa-pic').removeClass('close');
      });
      
      //$(this).toggleClass('open');
      var thisItem = $(this).parent();
      thisItem.addClass('open');
      thisItem.find('.qa-pic').addClass('close');
      thisItem.find('.qa-content-article').slideDown();

    });
  });

  news.item.cancelBtn.each(function(){
    $(this).on('click', function(){
      var thisItem = $(this).parent();
      thisItem.removeClass('open');
      thisItem.find('.qa-pic').removeClass('close');
      thisItem.find('.qa-content-article').slideUp();
    });
  });

})