$( document ).ready(function() {
  $("td").each(function(){
     $cell = $(this);
     if($cell.text() >10){
        $cell.css("background-color", "pink");
     }
  });

});
