$( document ).ready(function() {

  $("#link1").click(function(event){

     event.preventDefault();
     alert("Prevented the link from following the URL !!!");

  });

});
