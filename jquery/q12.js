$(document).ready(function(){

    $(".parent").bind("click", function(){
         $(this).append("<p>click event fired</p>")
    });

    $(".parent ul li").click(function(e) {
       e.stopPropagation();
  });
});
