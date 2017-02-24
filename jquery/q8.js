$( document ).ready(function() {

  $("button").click(function(){

    $("body").append("<button class='newbtn'>CLICK</button>");

  });

  $("body").on("click", "button.newbtn", function(){
    $("body").append("<p>New button working !</p>");
  });

});
