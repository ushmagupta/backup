$( document ).ready(function() {

  $('.menu ').hover(
  function () {
  $('.sub').slideDown(); /*slideDown the subitems on mouseover*/
  }, function () {
  $('.sub').slideUp();  /*slideUp the subitems on mouseout*/
  });


});
