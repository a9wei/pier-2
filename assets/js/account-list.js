$(document).ready(function(){
  
  //alert('2');
  var list = $('.record-list:nth-child(odd)');
  // list.cancelBtn = list.find('.news-close-btn');

  list.each(function(){
    $(this).on('click', function(e){
      e.preventDefault();
      $(this).next().toggleClass('open');
    });
  });

  // list.cancelBtn.each(function(){
  //   $(this).on('click', function(){
  //     thisItem.removeClass('open');
  //   });
  // });

});