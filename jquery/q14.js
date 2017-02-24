$( document ).ready(function() {

  var highest = null;
  var max = -1;
  $(".divs").each(function(){
      var h = $(this).height();
      if(h > max){
        max = h;
        highest = $(this);
      }
  });

highest.css("background-color", "lightblue");
$("body").append("<br><b> MAX HEIGHT IS : "+max+"px</b><br>");

});
